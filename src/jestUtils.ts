import { fireEvent } from '@testing-library/react-native';
import invariant from 'invariant';
import { DeviceEventEmitter } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import {
  FlingGestureHandlerEventPayload,
  flingHandlerName,
} from './handlers/FlingGestureHandler';
import {
  ForceTouchGestureHandlerEventPayload,
  forceTouchHandlerName,
} from './handlers/ForceTouchGestureHandler';
import {
  GestureEvent,
  HandlerStateChangeEvent,
} from './handlers/gestureHandlerCommon';
import { BaseGesture, GestureType } from './handlers/gestures/gesture';
import { findHandlerByTestID } from './handlers/handlersRegistry';
import {
  LongPressGestureHandlerEventPayload,
  longPressHandlerName,
} from './handlers/LongPressGestureHandler';
import {
  NativeViewGestureHandlerPayload,
  nativeViewHandlerName,
} from './handlers/NativeViewGestureHandler';
import {
  PanGestureHandlerEventPayload,
  panHandlerName,
} from './handlers/PanGestureHandler';
import {
  PinchGestureHandlerEventPayload,
  pinchHandlerName,
} from './handlers/PinchGestureHandler';
import {
  RotationGestureHandlerEventPayload,
  rotationHandlerName,
} from './handlers/RotationGestureHandler';
import {
  TapGestureHandlerEventPayload,
  tapHandlerName,
} from './handlers/TapGestureHandler';
import { State } from './State';
import {
  hasProperty,
  withPrevAndCurrent,
  withPrevAndCurrentMapFn,
} from './utils';

type GestureHandlerTestEvent = (
  | GestureEvent
  | HandlerStateChangeEvent
)['nativeEvent'];

type HandlerNames = keyof DefaultEventsMapping;

type WithNumberOfPointers<T> = {
  [P in keyof T]: T[P] & { numberOfPointers: number };
};
type DefaultEventsMapping = WithNumberOfPointers<{
  [flingHandlerName]: FlingGestureHandlerEventPayload;
  [forceTouchHandlerName]: ForceTouchGestureHandlerEventPayload;
  [longPressHandlerName]: LongPressGestureHandlerEventPayload;
  [nativeViewHandlerName]: NativeViewGestureHandlerPayload;
  [panHandlerName]: PanGestureHandlerEventPayload;
  [pinchHandlerName]: PinchGestureHandlerEventPayload;
  [rotationHandlerName]: RotationGestureHandlerEventPayload;
  [tapHandlerName]: TapGestureHandlerEventPayload;
}>;

const handlersDefaultEvents: DefaultEventsMapping = {
  [flingHandlerName]: {
    x: 0,
    y: 0,
    absoluteX: 0,
    absoluteY: 0,
    numberOfPointers: 1,
  },
  [forceTouchHandlerName]: {
    x: 0,
    y: 0,
    absoluteX: 0,
    absoluteY: 0,
    force: 1,
    numberOfPointers: 1,
  },
  [longPressHandlerName]: {
    x: 0,
    y: 0,
    absoluteX: 0,
    absoluteY: 0,
    duration: 100,
    numberOfPointers: 1,
  },
  [nativeViewHandlerName]: {
    pointerInside: true,
    numberOfPointers: 1,
  },
  [panHandlerName]: {
    x: 0,
    y: 0,
    absoluteX: 0,
    absoluteY: 0,
    translationX: 100,
    translationY: 0,
    velocityX: 3,
    velocityY: 0,
    numberOfPointers: 1,
  },
  [pinchHandlerName]: {
    focalX: 0,
    focalY: 0,
    scale: 2,
    velocity: 1,
    numberOfPointers: 2,
  },
  [rotationHandlerName]: {
    anchorX: 0,
    anchorY: 0,
    rotation: 3.14,
    velocity: 2,
    numberOfPointers: 2,
  },
  [tapHandlerName]: {
    x: 0,
    y: 0,
    absoluteX: 0,
    absoluteY: 0,
    numberOfPointers: 1,
  },
};

function isGesture(
  componentOrGesture: ReactTestInstance | GestureType
): componentOrGesture is GestureType {
  return componentOrGesture instanceof BaseGesture;
}

function wrapWithNativeEvent(event: GestureHandlerTestEvent) {
  return { nativeEvent: event };
}

function fillOldStateChanges(
  previousEvent: GestureHandlerTestEvent | null,
  currentEvent: Omit<GestureHandlerTestEvent, 'oldState'>
): GestureHandlerTestEvent {
  const isFirstEvent = previousEvent === null;
  if (isFirstEvent) {
    return {
      oldState: State.UNDETERMINED,
      ...currentEvent,
    } as GestureHandlerTestEvent;
  }

  const isGestureStateEvent = previousEvent.state !== currentEvent.state;
  if (isGestureStateEvent) {
    return {
      oldState: previousEvent.state,
      ...currentEvent,
    } as GestureHandlerTestEvent;
  } else {
    return currentEvent as GestureHandlerTestEvent;
  }
}

function fillMissingActiveStateFields(
  previousEvent: Omit<GestureHandlerTestEvent, 'oldState'> | null,
  currentEvent: Omit<GestureHandlerTestEvent, 'state' | 'oldState'>
) {
  const isFirstEvent = previousEvent === null;
  if (isFirstEvent) {
    return currentEvent;
  }
  if (
    previousEvent.state === State.ACTIVE &&
    !hasProperty(currentEvent, 'state')
  ) {
    return {
      state: State.ACTIVE,
      ...currentEvent,
    };
  }
  return currentEvent;
}

type EventWithStates = Partial<
  Pick<GestureHandlerTestEvent, 'oldState' | 'state'>
>;
function validateStateTransitions(
  previousEvent: EventWithStates | null,
  currentEvent: EventWithStates
) {
  function stringify(event: Record<string, unknown> | null) {
    return JSON.stringify(event, null, 2);
  }
  function errorMsgWithBothEvents(description: string) {
    return `${description}, invalid event: ${stringify(
      currentEvent
    )}, previous event: ${stringify(previousEvent)}`;
  }

  function errorMsgWithCurrentEvent(description: string) {
    return `${description}, invalid event: ${stringify(currentEvent)}`;
  }

  invariant(
    hasProperty(currentEvent, 'state'),
    errorMsgWithCurrentEvent('every event must have state')
  );

  const isFirstEvent = previousEvent === null;
  if (isFirstEvent) {
    invariant(
      currentEvent.state === State.BEGAN,
      errorMsgWithCurrentEvent('first event must have BEGAN state')
    );
  }

  if (previousEvent !== null) {
    if (previousEvent.state !== currentEvent.state) {
      invariant(
        hasProperty(currentEvent, 'oldState'),
        errorMsgWithCurrentEvent(
          'when state changes, oldState field should be present'
        )
      );
      invariant(
        currentEvent.oldState === previousEvent.state,
        errorMsgWithBothEvents(
          "when state changes, oldState should be the same as previous event' state"
        )
      );
    }
  }

  return currentEvent;
}

interface HandlerInfo {
  handlerType: HandlerNames;
  handlerTag: number;
}
function fillMissingDefaultsFor({
  handlerType,
  handlerTag,
}: HandlerInfo): (
  event: Partial<GestureHandlerTestEvent>
) => Omit<GestureHandlerTestEvent, 'state' | 'oldState'> {
  return (event) => {
    return {
      ...handlersDefaultEvents[handlerType],
      ...event,
      handlerTag,
    };
  };
}

type EventEmitter = (
  eventName: string,
  args: { nativeEvent: GestureHandlerTestEvent }
) => void;
interface HandlerData {
  emitEvent: EventEmitter;
  handlerType: HandlerNames;
  handlerTag: number;
}
function getHandlerData(
  componentOrGesture: ReactTestInstance | GestureType
): HandlerData {
  if (isGesture(componentOrGesture)) {
    const gesture = componentOrGesture;
    return {
      emitEvent: (eventName, args) => {
        DeviceEventEmitter.emit(eventName, args.nativeEvent);
      },
      handlerType: gesture.handlerName as HandlerNames,
      handlerTag: gesture.handlerTag,
    };
  }
  const gestureHandlerComponent = componentOrGesture;
  return {
    emitEvent: (eventName, args) => {
      fireEvent(gestureHandlerComponent, eventName, args);
    },
    handlerType: gestureHandlerComponent.props.handlerType as HandlerNames,
    handlerTag: gestureHandlerComponent.props.handlerTag as number,
  };
}
declare global {
  interface Array<T> {
    withPrevAndCurrent: <Transformed>(
      mapFn: withPrevAndCurrentMapFn<T, Transformed>
    ) => Transformed[];
  }
}

function extendArrayProto(propertyName: string, f: unknown) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, propertyName, {
    configurable: true,
    value: f,
  });
}

export function fireGestureHandler(
  componentOrGesture: ReactTestInstance | GestureType,
  eventList: Partial<GestureHandlerTestEvent>[]
): void {
  const { emitEvent, handlerType, handlerTag } = getHandlerData(
    componentOrGesture
  );

  extendArrayProto('withPrevAndCurrent', function (mapFn: any) {
    /* eslint-disable babel/no-invalid-this */
    // @ts-ignore afesfa
    return withPrevAndCurrent(this, mapFn);
    /* eslint-enable */
  });

  const events = eventList
    .map(fillMissingDefaultsFor({ handlerTag, handlerType }))
    .withPrevAndCurrent(fillMissingActiveStateFields)
    .withPrevAndCurrent(fillOldStateChanges)
    .withPrevAndCurrent(validateStateTransitions)
    // @ts-ignore TODO
    .map(wrapWithNativeEvent);

  // @ts-ignore defined few lines above
  delete Array.prototype.withPrevAndCurrent;

  const firstEvent = events.shift();
  invariant(
    firstEvent !== undefined && events.length !== 0,
    'Events list must contain at least two events.'
  ); // TODO: provide defaults

  emitEvent('onGestureHandlerStateChange', firstEvent);
  let lastSentEvent = firstEvent;
  for (const event of events) {
    const hasChangedState =
      lastSentEvent.nativeEvent.state !== event.nativeEvent.state;

    if (hasChangedState) {
      emitEvent('onGestureHandlerStateChange', event);
    } else {
      emitEvent('onGestureHandlerEvent', event);
    }
    lastSentEvent = event;
  }
}

export function getByHandlerId(testID: string) {
  const handler = findHandlerByTestID(testID);
  if (handler === null) {
    throw new Error(`Handler with id: '${testID}' cannot be found`);
  }
  return handler;
}

export function isJest(): boolean {
  return !!process.env.JEST_WORKER_ID;
}

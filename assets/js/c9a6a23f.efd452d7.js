"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[3258],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=n(83117),i=(n(67294),n(3905));const a={id:"fling-gh",title:"FlingGestureHandler",sidebar_label:"Fling"},o=void 0,l={unversionedId:"gesture-handlers/api/fling-gh",id:"version-2.3.0/gesture-handlers/api/fling-gh",title:"FlingGestureHandler",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/versioned_docs/version-2.3.0/gesture-handlers/api/fling-gh.md",sourceDirName:"gesture-handlers/api",slug:"/gesture-handlers/api/fling-gh",permalink:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/fling-gh",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"fling-gh",title:"FlingGestureHandler",sidebar_label:"Fling"},sidebar:"version-2.3.0/docs",previous:{title:"Rotation",permalink:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/rotation-gh"},next:{title:"Pinch",permalink:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/pinch-gh"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>direction</code>",id:"direction",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3},{value:"Event data",id:"event-data",level:2},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"Example",id:"example",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Consider using the new ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/api/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,i.kt)("p",null,"A discrete gesture handler that activates when the movement is sufficiently long and fast.\nHandler gets ",(0,i.kt)("a",{parentName:"p",href:"../basics/state#active"},"ACTIVE")," when movement is sufficiently long and it does not take too much time.\nWhen handler gets activated it will turn into ",(0,i.kt)("a",{parentName:"p",href:"../basics/state#end"},"END")," state when finger is released.\nThe handler will fail to recognize if the finger is lifted before being activated.\nThe handler is implemented using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer"},"UISwipeGestureRecognizer")," on iOS and from scratch on Android."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"FlingGestureHandler")," component:"),(0,i.kt)("h3",{id:"direction"},(0,i.kt)("inlineCode",{parentName:"h3"},"direction")),(0,i.kt)("p",null,"Expressed allowed direction of movement. It's possible to pass one or many directions in one parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"direction={Directions.RIGHT | Directions.LEFT}\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"direction={Directions.DOWN}\n")),(0,i.kt)("h3",{id:"numberofpointers"},(0,i.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,i.kt)("p",null,"Determine exact number of points required to handle the fling gesture."),(0,i.kt)("h2",{id:"event-data"},"Event data"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/api/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"FlingGestureHandler"),":"),(0,i.kt)("h3",{id:"x"},(0,i.kt)("inlineCode",{parentName:"h3"},"x")),(0,i.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),(0,i.kt)("h3",{id:"y"},(0,i.kt)("inlineCode",{parentName:"h3"},"y")),(0,i.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),(0,i.kt)("h3",{id:"absolutex"},(0,i.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,i.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,i.kt)("a",{parentName:"p",href:"#x"},(0,i.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),(0,i.kt)("h3",{id:"absolutey"},(0,i.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,i.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,i.kt)("a",{parentName:"p",href:"#y"},(0,i.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/release_tests/fling/index.tsx"},"fling example")," from Gesture Handler Example App."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const LongPressButton = () => (\n  <FlingGestureHandler\n    direction={Directions.RIGHT | Directions.LEFT}\n    onHandlerStateChange={({ nativeEvent }) => {\n      if (nativeEvent.state === State.ACTIVE) {\n        Alert.alert("I\'m flinged!");\n      }\n    }}>\n    <View style={styles.box} />\n  </FlingGestureHandler>\n);\n')))}c.isMDXComponent=!0}}]);
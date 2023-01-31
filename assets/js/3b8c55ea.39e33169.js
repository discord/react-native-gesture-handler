"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const i={id:"installation",title:"Installation"},o=void 0,l={unversionedId:"installation",id:"installation",title:"Installation",description:"Requirements",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/react-native-gesture-handler/docs/next/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/react-native-gesture-handler/docs/next/"},next:{title:"Troubleshooting",permalink:"/react-native-gesture-handler/docs/next/troubleshooting"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Expo",id:"expo",level:2},{value:"Managed Expo",id:"managed-expo",level:3},{value:"Bare React Native",id:"bare-react-native",level:3},{value:"JS",id:"js",level:2},{value:"Linking",id:"linking",level:3},{value:"Fabric",id:"fabric",level:2},{value:"on iOS:",id:"on-ios",level:4},{value:"on Android:",id:"on-android",level:4},{value:"With wix/react-native-navigation",id:"with-wixreact-native-navigation",level:3},{value:"Android",id:"android",level:2},{value:"Usage with modals on Android",id:"usage-with-modals-on-android",level:3},{value:"Kotlin",id:"kotlin",level:3},{value:"iOS",id:"ios",level:2},{value:"Web",id:"web",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"version"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"react-native")," version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.0.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"0.63.0+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.4.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"0.60.0+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"0.57.2+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<","1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.50.0+")))),(0,r.kt)("p",null,"It may be possible to use newer versions of react-native-gesture-handler on React Native with version <= 0.59 by reverse Jetifying.\nRead more on that here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries"},"https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries")),(0,r.kt)("p",null,"Note that if you wish to use ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},(0,r.kt)("inlineCode",{parentName:"a"},"React.createRef()"))," support for ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/interactions"},"interactions")," you need to use v16.3 of ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")),(0,r.kt)("p",null,"In order to fully utilize the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/api/gestures/touch-events"},"touch events")," you also need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," 2.3.0-beta.4 or newer."),(0,r.kt)("h2",{id:"expo"},"Expo"),(0,r.kt)("h3",{id:"managed-expo"},"Managed ",(0,r.kt)("a",{parentName:"h3",href:"https://expo.io"},"Expo")),(0,r.kt)("p",null,"To use the version of react-native-gesture-handler that is compatible with your managed Expo project, run ",(0,r.kt)("inlineCode",{parentName:"p"},"expo install react-native-gesture-handler"),"."),(0,r.kt)("p",null,"The Expo SDK incorporates the latest version of react-native-gesture-handler available at the time of each SDK release, so managed Expo apps might not always support all our latest features as soon as they are available."),(0,r.kt)("h3",{id:"bare-react-native"},"Bare ",(0,r.kt)("a",{parentName:"h3",href:"http://facebook.github.io/react-native/"},"React Native")),(0,r.kt)("p",null,"Since the library uses native support for handling gestures, it requires an extended installation to the norm. If you are starting a new project, you may want to initialize it with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/workflow/expo-cli/"},"expo-cli")," and use a bare template, they come pre-installed with react-native-gesture-handler."),(0,r.kt)("h2",{id:"js"},"JS"),(0,r.kt)("p",null,"First, install the library using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-gesture-handler\n")),(0,r.kt)("p",null,"or with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," if you prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-native-gesture-handler\n")),(0,r.kt)("p",null,"After installation, wrap your entry point with ",(0,r.kt)("inlineCode",{parentName:"p"},"<GestureHandlerRootView>")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default function App() {\n  return <GestureHandlerRootView style={{ flex: 1 }}>{/* content */}</GestureHandlerRootView>;\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you use props such as ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"simultaneousHandlers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"waitFor")," etc. with gesture handlers, the handlers need to be mounted under a single ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView"),". So it's important to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," as close to the actual root view as possible."),(0,r.kt)("p",{parentName:"admonition"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," acts like a normal ",(0,r.kt)("inlineCode",{parentName:"p"},"View"),". So if you want it to fill the screen, you will need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"{ flex: 1 }")," like you'll need to do with a normal ",(0,r.kt)("inlineCode",{parentName:"p"},"View"),". By default, it'll take the size of the content nested inside.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're using gesture handler in your component library, you may want to wrap your library's code in the GestureHandlerRootView component. This will avoid extra configuration for the user.")),(0,r.kt)("h3",{id:"linking"},"Linking"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important"),": You only need to do this step if you're using React Native 0.59 or lower. Since v0.60, linking happens automatically.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"react-native link react-native-gesture-handler\n")),(0,r.kt)("h2",{id:"fabric"},"Fabric"),(0,r.kt)("p",null,"Starting with version 2.3.0, Gesture Handler now supports ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/fabric-renderer"},"Fabric"),"!. To use Gesture Handler in your Fabric application you have to:"),(0,r.kt)("h4",{id:"on-ios"},"on iOS:"),(0,r.kt)("p",null,"Install pods using ",(0,r.kt)("inlineCode",{parentName:"p"},"RCT_NEW_ARCH_ENABLED=1 pod install")," \u2013 this is the same command you run to prepare a Fabric build but you also need to run it after a new native library gets added."),(0,r.kt)("h4",{id:"on-android"},"on Android:"),(0,r.kt)("p",null,"There are no additional steps required so long as your app is configured to build with Fabric \u2013 this is typically configured by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"newArchEnabled=true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file in your project."),(0,r.kt)("h3",{id:"with-wixreact-native-navigation"},"With ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/wix/react-native-navigation"},"wix/react-native-navigation")),(0,r.kt)("p",null,"If you are using a native navigation library like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation"},"wix/react-native-navigation")," you need to make sure that every screen is wrapped with ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," (you can do this using ",(0,r.kt)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC")," function). This can be done for example at the stage when you register your screens. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { gestureHandlerRootHOC } from 'react-native-gesture-handler';\nimport { Navigation } from 'react-native-navigation';\nimport FirstTabScreen from './FirstTabScreen';\nimport SecondTabScreen from './SecondTabScreen';\nimport PushedScreen from './PushedScreen';\n// register all screens of the app (including internal ones)\nexport function registerScreens() {\n  Navigation.registerComponent('example.FirstTabScreen', \n    () => gestureHandlerRootHOC(FirstTabScreen),\n    () => FirstTabScreen\n  );\n  Navigation.registerComponent('example.SecondTabScreen', \n    () => gestureHandlerRootHOC(SecondTabScreen),\n    () => SecondTabScreen\n  );\n  Navigation.registerComponent('example.PushedScreen', \n    () => gestureHandlerRootHOC(PushedScreen),\n    () => PushedScreen\n  );\n}\n")),(0,r.kt)("p",null,"You can check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/henrikra/nativeNavigationGestureHandler"},"this example project")," to see this kind of set up in action."),(0,r.kt)("p",null,"Remember that you need to wrap each screen that you use in your app with ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," (you can do this using ",(0,r.kt)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC")," function) as with native navigation libraries each screen maps to a separate root view. It will not be enough to wrap the main screen only."),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("h3",{id:"usage-with-modals-on-android"},"Usage with modals on Android"),(0,r.kt)("p",null,"On Android RNGH does not work by default because modals are not located under React Native Root view in native hierarchy.\nTo fix that, components need to be wrapped with ",(0,r.kt)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC")," (it's no-op on iOS and web)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ExampleWithHoc = gestureHandlerRootHOC(() => (\n    <View>\n      <DraggableBox />\n    </View>\n  );\n);\n\nexport default function Example() {\n  return (\n    <Modal>\n      <ExampleWithHoc />\n    </Modal>\n  );\n}\n")),(0,r.kt)("h3",{id:"kotlin"},"Kotlin"),(0,r.kt)("p",null,"Since version ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0.0")," RNGH has been rewritten with Kotlin. The default version of the Kotlin plugin used in this library is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.6.21"),"."),(0,r.kt)("p",null,"If you need to use a different Kotlin version, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinVersion")," ext property in ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," file and RNGH will use that version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'buildscript {\n    ext {\n        ...\n        kotlinVersion = "1.6.21"\n    }\n}\n')),(0,r.kt)("p",null,"The minimal version of the Kotlin plugin supported by RNGH is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.4.10"),"."),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"There is no additional configuration required on iOS except what follows in the next steps."),(0,r.kt)("p",null,"If you're in a CocoaPods project (the default setup since React Native 0.60),\nmake sure to install pods before you run your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios && pod install\n")),(0,r.kt)("p",null,"For React Native 0.61 or greater, add the library as the first import in your index.js file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\n")),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("p",null,"There is no additional configuration required for web, however, if you want to try the new (experimental) web implementation of Gesture Handler, you need to enable at the beginning of your index.js file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';\n\nenableExperimentalWebImplementation(true);\n")))}d.isMDXComponent=!0}}]);
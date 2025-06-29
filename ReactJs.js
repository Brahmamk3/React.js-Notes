
What React is
=============
-React is a JavaScript library for building dynamic and interactive user interfaces.
-It is an open-source library. 
-It is created & maintained by Facebook.
-React is used to build single page applications.
-React allows us to create reusable UI components.

React features:
==================
1.Easy to read and understand and debug
2.virtual dom
3.hooks
4.reusable components

why React is library not a framework?
=====================================

  Library : Libarary is ic collection of classes or functions. It focus on only one operation.
            Ex: React is library. By using it you can build UI but if you want to perfrom routing you need to install react-router-dom same like for redux you need install react-redux and so on.
                If react is framework then these all installed while install react like angular
  Framewprk : Framework is collection of libraries. It perform multiple operations.
              Ex: Angular is Framework. When you install react all the extrnal tools and libraries are also installed.

    React                          vs             Angular
-----------------------------------------------------------------------
  1.It is library                           1.it is framework
  2.Jsx+HTML                                2.HTML+typescript
  3.virtual Dom                             3.regular dom
  4.extra libraries needed               4.no need of extra libraries needed

What is JSX:
================
  Def : JSX is syntax extension of JavaScript. It allow HTml in JavaScript.
  - JSX is basically React code.
  - JSX is cannot understand by browser.So, we need a tool(Babel)(a JavaScript compiler) to transform it to valid JavaScript.

DOM (Document Object Model)
==========================
  -DOM is a object-based-tree-like structure representing the HTML of a web page.
  -Allows JavaScript to interact with and modify DOM elements.
  -Changes in DOM automatically reflects in web page's content, structure, and style. 

What is Virtual DOM?
====================
- Definition: The Virtual DOM is a lightweight copy of the Real DOM.
- It is also an object-based tree structure representing the current/latest HTML of a webpage.
- The Virtual DOM helps avoid updating the entire Real DOM.
- It uses a diffing algorithm to compare the previous and new Virtual DOMs,
- identifies the differences, and then updates only the changed parts in the Real DOM.
  
Virtual DOM Benefits:
=====================
Improved Performance: By reducing the number of direct DOM manipulations, the Virtual DOM significantly speeds up the update process. 
Optimized Updates: React intelligently determines the most efficient way to update the real DOM, minimizing costly reflows and repaints. 
Simplified Development: The Virtual DOM makes it easier to work with complex UIs by abstracting away the complexities of direct DOM manipulation. 

Note:
=====
  1.Virtual DOM is stored in RAM(temparary) memory
  2.Real DOM is Stored in Brower or UI memory.

ReactDOM
========
- ReactDOM connects React to the browser’s Real DOM.
- React creates a Virtual DOM (a copy of the UI in memory).
- When something changes, React compares the old and new Virtual DOMs to find the changes.
- ReactDOM gets these changes and updates only the needed parts in the Real DOM (real webpage).
- This makes the UI updates fast and efficient.

React Element:
==============
  Def : A React Element is a plain JavaScript object that stores information about a JSX element.
  Ex:
  JSX: <h1>hello world</h1>
              to
  React element:
  {
  type: "h1",
  props: {
    children: "Hello World"
  }
}
- React Elements are created using the React.createElement() function.
- React uses these elements to build the Virtual DOM.
- React compares and uses Virtual DOM to update the Real DOM efficiently.

Internal working/execution/rendering Of React code:
*******************************************************
  1.JSX to JS(React Elements)
    - Browser cnnot understand JSX so it is converted into JavaScript(React Element) via Babel(JS Compailer).
  2.Virtual DOM Creating
    - React uses the The converted JavaScript React element's to create virtual dom.
  3.Finding Differences (Diffing)
    - On initial render, the Virtual DOM is converted to Real DOM.
    - On re-render, React compares the new Virtual DOM with the previous one using a diffing algorithm to find what changed.
  4.Updating Real DOM
    - ReactDOM updates the Real DOM only where changes are needed, based on the diffing result.
    - Changes in the Real DOM automatically reflect in the web page.

What is Deployment time?
==========================
You must run npm run build manually to prepare your app for production deployment
Then It happens:
Babel compiles JSX → JavaScript
Minifies and optimizes the code
create one Bundle file all files for production
create build/ file to saved all bundle files
This folder is ready to be uploaded to a live production server (e.g., Netlify, Vercel, Firebase)

This does not happen automatically when you run npm start
npm start
Runs the app in development mode
What it does:
Babel compiles JSX → JavaScript
Webpack bundles files in memory only (not written to disk) as singl file
Starts a local development server (usually at http://localhost:3000)
upload this file to local server 
This entire process happens automatically in development mode without needing to run npm run build

What is it Runtime?
=====================
Runtime is when your React app is running inside the user's browser and UI is displayed.

What happens at runtime?
The browser loads the bundled files (from build/)
React starts running:
React Creates the Virtual DOM via React Elements
Idetify changes and Update the Real DOM.

Note:
- Virtual DOM is created at runtime, not at deployment time, and not during the bundling phase either.
- When you run npm start, Webpack bundles all your React files (like App.js, index.js, CSS, etc.) into a single bundle file (e.g., main.js).
  This bundled file is not saved on your disk — instead, it's stored temporarily in RAM (memory) and served to the browser via the local development server (http://localhost:3000).
- When you run npm run build, the same bundling happens, but the output is saved to the disk in a build/ folder, which you can upload to a real (live) server for production.


What is Reconciliation in React?
=================================
Reconciliation is the process where:
•	React compares the previous Virtual DOM with the new one (after any update).
•	It identifies what changed using a diffing algorithm.
•	Only the changed parts are updated in the actual (real) DOM.

React.StrictMode
================
- StrictMode is a tool for highlighting potential problems in a React application during development only, not during deployment.
- It helps identify issues early by running extra checks on components.
-Strict mode checks for:-
          Deprecated lifecycle methods or hooks
          Unsafe or unexpected side effects etc.,.
- StrictMode works only during development. It is automatically removed when the app is in production/deployment(npm start/npm buils).
             Note: npm start is used for development.
                   For production, we use npm run build to generate the deployment-ready code.
Ex:
<StrictMode>
		<App />
</StrictMode>

Note: StrictMode renders components twice (on dev but not production) in order to
      detect any problems with our code and warn us about them.

what is Component in React?
===============================
- A Component is a building block of a React app.
- It returns a part of the UI (some HTML).
- Components are reusable and can be nested inside other components.
- A React app is made up of a tree of components.
- Components help you divide the UI into small, independent parts.

2 types Of Component
====================
1. Functional Component ( stateless/presentational/dumb)
2. Class Component ( statefull)

1.Functional Component ( stateless/presentational/dumb)
-A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
-Functional Components are faster and much simpler than Class Components.
-Functional components are very useful in React, especially when you want to isolate state management from the component. That’s why they are often called stateless components.

  
Functional components are very useful in React, especially when you want to isolate state management from the component. That’s why they are often called stateless components.
***********************************************************************************************************************************************************************************
import React,{useState} from "react"

export default function App(){
  let [name,setName]=useState("Ram")

  return (
    <>
      <h1>name:{name}</h1>
      <Child name={setName(name)}/>
      <button onClick{()=>{setName("Ravi")}}>Click</button>
    </>
  )
}

function Child(props){
  return(
    <h1>{props.name}</h1>
  )
}

Explanation (Simple):
- Functional components are also called stateless components if they don’t manage their own state.
- In this example:
    The state (name) is managed in the parent component (App).
    The Child component just receives data as props and displays it.
    So, the Child is stateless, and the App is stateful.

2.Class Component(statefull)
==============================
-React class components can be defined by extending React.Component or React.PureComponent.
-React class components extending React.Component to acquire the properties of  this.state and life cycle methods from React.Component.
-It must include a render() method that returns what JSX code.

  Note:
==============
  -React requires that the first letter of a component class be capitalized. If the first letter of a name is capitalized, then JSX realizes it’s a component instance; if not, then it’s an HTML tag. 

When to use a Class Component over a Function Component? or Why we use Hooks in Functions?
===========================================================================================
-If the component needs state or lifecycle methods then use class component otherwise use function component. 
-However, from React 16.8 with the addition of Hooks, we use functional component than class component. by using hooks we handle state management and life cycle methods operations.
-So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.


Props in React
=================
- Props (short for properties) are used to pass data from a parent component to a child component.
- Props are read-only and follow one-way (unidirectional) data flow — from parent to child.
- You can pass values or functions as props.
- Props are received in the child component as a JavaScript object.

What is Props Destructuring
============================
- Props destructuring means directly extracting values from the props object instead of using props.name, props.age, etc.
- It makes the code cleaner and shorter.
Ex:
// Parent Component
function App() {
  return (
    <Profile name="Ram" age={25} location="Hyderabad" />
  );
}

// Child Component with Props Destructuring
function Profile(props) {
	let { name, age, location }=props
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Location: {location}</h3>
    </>
  );
}

What is PropTypes?
=====================
- PropTypes is a feature in React used to check the type of props passed to a component.
- It helps make sure that components receive the correct data types (e.g., string, number, object).
Ex:
import React from "react";
import PropTypes from "prop-types"; // ✅ import PropTypes

export default function App() {
  let name = "Ram";
  let age = 23;
  return <Child name={name} age={age} />  
}

function Child({ name, age }) {
  return <h1>{name} - {age}</h1>  
}

// ✅ Define PropTypes
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};


What is isRequired?
- PropTypes.string.isRequired means that this prop must be passed.
- If not, React will show a warning in the console (in development mode).

Advantages of PropTypes
- Helps validate props at runtime.
- Warns if a required prop is missing or has the wrong type.
- Makes your component’s API clearer for other developers.

Default Props
==============
- Default props are the default values assigned to props when the parent component doesn’t pass them.
- If parent pass vales to props default values not printed in webpage. This is same like default parametrs in fumction.
Ex:
import React from "react";

// ✅ Parent Component
export default function App() {
  return (
    <>
      <Greeting /> {/* No name passed */}
      <Greeting name="Ram" /> {/* Name passed */}
    </>
  );
}

// ✅ Child Component
function Greeting({ name = "Ravi" }) {
  return <h1>Hello, {name}!</h1>;
}

Output webpage:
Hello, Ravi!
Hello, Ram!

What is props.children?
============================
- props.children is a special prop in React.
- It represents the content you put between the opening and closing tags of a component.

Ex:
export default function App() {
  return (
    <Wrapper>
      <h1>Hello</h1>
      <p>This is inside the wrapper</p>
      <Child />
    </Wrapper>
  );
}
function Wrapper(props) {
  return (
    <div >
      {props.children}
    </div>
  );
}

function Child() {
  return (
    <>
      <h1>Child component</h1>
    </>
  )
}

Output webpage:
Hello
This is inside the wrapper
Child component

Props Drilling:
===================
- passing props from parent to deeper nested child througn intermediate multiple childs is called props drilling

Drawbacks:
- un-necessarly pass the props to intermediate childs which not good
- if one of the intermediate child get error the whole procees gives error.

Limitations of Local Variables
==============================
No re-rendering : Changing a Local variable doesn't re-render, the component won't update to reflect the new value.
No Persistence : Local variables are reset every time the component re-renders - not saved.

export default function StateDemo1() {
    let count = 0;
    const increment = ()=>{
        count++;
        console.log(count);
    }
    return <>
        <h2>State Demo 1</h2>
        <div>Count value is: {count}</div>
        <button onClick={increment}>Increment</button>
    </>
}

- so we use state variables

State varibles in React:
==========================
Re-rendering: When a state variable changes, React re-renders the component and updates the UI.
Persistence: State values are preserved between renders. - values are saved

What is State in React?
==========================
- state is javscript oject used to  store the dynamic data.
- it is mutable (changeble)
- in function , by using useState,useReducer,Redux we create a state and store the variables(number,string,object,arr etc) inside
- in classes , by using this.state(property acquires from React.Component) we can strore and setState() used to change state data.
- in classes, -If a piece of code needs to be executed only after the state has been updated, then place that code in the callback function which is the second arguement to setState()
 Syntax: setState( StateObject, callbackFunction);

Note:
-----
-setState() actions are asynchronous. setState() doesn’t immediately mutate this.state.

 React Events
=================
- In React, when you click a button, type in a textbox, or submit a form, special event handlers like onClick, onChange, and onSubmit are triggered.
- These event handlers call the functions you define to handle the action.
Flow: User Clicks ➜ onClick Event ➜ React Calls Your Function ➜ Function Runs ➜ You See Result

Component vs PureComponent
==========================
-PureComponent is exactly the same as Component except that it handles the 
 'shouldComponentUpdate' method for us. 
-When props or state changes, PureComponent will do a shallow comparison on both props and state.if there is a change in state/props, then only render() will be called. 
-A normal Component always calls render() when we update the state. even though there is no change in the last state data and current state data.
-Class components that extend the React.PureComponent class are treated as pure components.
	Ex: class myComp extends React.PureComponent {
		}
-in Functional components, re-render happens only if the state changes. 
-Every Functional Component is a Pure-Component.

Reac.Memo Component
====================
-Introduced in React v16.6.  This improves performance.
-React.memo() is a higher-order component.
-React.memo() can be used for both class & function components.
-Def : When a component is wrapped in React.memo(), React renders the component only if the props those are passed to that component changes.
-lets you skip re-rendering a component when its props are unchanged.
-ex: export default React.memo(MyComponent);

LifeCycle Methods
===================
-Every component in React goes through a lifecycle of events.
-The three phases are: 
	1.Mounting - (constructor,getDerivedStateFromProps,render,componentDidMount)
	2.Updating - (getDerivedStateFromProps,shouldComponentUpdate,render, getSnapshotBeforeUpdate, componentDidUpdate)
	3.Unmounting - (componentWillUnmount)


Mounting: means putting elements into the DOM. Intial rendering.
---------------------------------------------
1.constructor()
2.static getDerivedStateFromProps(props,state)
3.render()
4.componentDidMount()

Note:- The render() method is required and will always be called, 
	   the others are optional and will be called if you define them.


constructor()
-----------
-The constructor() method is called before anything else, when the component is initiated. 
-It is the natural place to set up the initial state and other initial values.
-The constructor() method is called with the props, as argument, 
 and you should always start by calling the 'super(props)' before anything else,
 Otherwise,this.props will be undefined.
-This will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
-If you neither initialize state nor bind methods for your React component, there is no need to implement a constructor for React component.
-setState() method should not be called in the constructor(). we will get console error
 error - Can't call setState on a component that is not yet mounted


static getDerivedStateFromProps()
--------------------------------
-The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
-This is the natural place to set the state object based on the initial props.
-It takes (props,state) as argument, and returns an object with changes to the state.
-only fires when the parent causes a re-render and not as a result of a local setState.
- getDerivedStateFromProps() method is called before creating virtual dom by called render() method at run time after completing conversition of jsx to js

render()
-------
-The render() method returns JSX → React converts it to React elements (JavaScript objects) → React internally uses these to create the Virtual DOM.
-it gets re-invoked when state/props data changes.



componentDidMount()
------------------
-The componentDidMount() method is called after the component is rendered.
-This is a good place to initiate the network request.
-if we are going to fetch any data from an API then API call should be placed in this lifecycle method,and then we get the response, we can call the setState() method and render the element with updated data.
-good place for DOM manipulation.



Updating
=========
1.static getDerivedStateFromProps(props,state)
2.shouldComponentUpdate()
3.render()
4.getSnapshotBeforeUpdate(prevProps, prevState)
5.componentDidUpdate()


getDerivedStateFromProps()
-----------------------
-while updating state/props getDerivedStateFromProps() method is called. 
-This is the first method that is called when a component gets updated.
-This is still the natural place to set the state object based on the initial props.


shouldComponentUpdate()
----------------------
-In the shouldComponentUpdate() method a boolean value should be returned that specifies whether React should continue with the rendering or not.
-The default value is true.
-shouldComponentUpdate() lifecycle shouldn't be added if the class is extending React.PureComponent.


getSnapshotBeforeUpdate(prevProps, prevState)
------------------------
-In the getSnapshotBeforeUpdate(prevProps, prevState) method we have access to the props and state before the update,meaning that even after the update, we can check what the values were before the update.


example:
-When the component is mounting it is rendered with the favorite color "red".
-When the component has been mounted, a timer changes the state, and after one second,the favorite color becomes "yellow".
-This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method,this method is executed, and writes a message to the empty DIV1 element.


componentDidUpdate()
-------------------
-The componentDidUpdate() method is called after the component is updated in the DOM.
-componentDidUpdate() is invoked immediately after the state is updated.
-This method is not called for the initial render,componentDidMount() will be called for the initial render. 
-it gets called only when state/props gets updated.




Unmounting - Removing the component from DOM
==========
-The next phase in the lifecycle is when a component is removed from the DOM,or unmounting.
-React has only one built-in method that gets called when a component is unmounted.

componentWillUnmount()
---------------------
-Called immediately before a component is destroyed. 
-Perform any necessary cleanup in this method, such as cancel network requests, 
 or cleaning up any DOM elements created in componentDidMount.
-clearTimeout, ClearInterval , Unsubscribe, detachEventHandlers


React Higher Order Components (HOCs)
=============================
-A higher-order component (HOC) is a technique in React for re-using component logic.
-To Share Common Functionalities accross components without repeating the code.
-Higher order Component takes one or more components as arguments, and return a new upgraded component.
  newComponent = higherOrderComponent( originalComponent )
-Higher order components are JavaScript functions used for adding additional functionalities to the existing component.
-These functions are pure, which means they are receiving data and returning values according to that data. 
-Authentication,Logging,Styling and Theming

Routing:
========
- Routing means navigating to different components without realoading the webpage.
- Single Page Applications(SPAs) are web applications that load a single HTML page and dynamically update that page as user interacts with the application. 
- Complete page Re-load doesn't happen. only a portion of a page gets loaded.
- HashRouter handles all routing inside the browser (frontend).It does not involve the backend or server at all

Types of routes:
================
React Router provides two different kind of routes:
1. BrowserRouter (builds classic URLs)
2. HashRouter (builds URLs with the hash)

https://application.com/dashboard     // BrowserRouter  ( IE>9 (OR) any other browser )
https://application.com/#/dashboard   // HashRouter (IE<9)

Difference B/W BrowserRouter vs HashRouter:
- We use BrowserRouter more than HashRouter in real life because it gives clean, professional URLs like:https://myapp.com/about(instead of https://myapp.com/#/about)
- HashRouter handles all routing inside the browser (frontend).It does not involve the backend or server at all




	
forceUpdate:
==============
Def : forceUpdate() is function and  used in class components to manually trigger a re-render, even if state or props haven't changed.
- It is not recommended to use forceUpdate().
- Always try to use state or props to manage re-renders.
- There is no forceUpdate() in functional components — use useState() or useReducer() to trigger updates.
Ex:
class App extends React.Component {
  count = 0; // class variable (not state)
  update = () => {
    this.count += 1;
    this.forceUpdate(); // manually trigger re-render
  };v
  render() {
    return (
      <>
        <h1>Count: {this.count}</h1>
        <button onClick={this.update}>Increment</button>
      </>
    );
  }
}
 
Data Binding in React
======================
Def: Data binding id the connection between UI and state.

2 types:
 one-way data binding
 two-way data binding

 one-way data binding : In  one-way data binding, the data is passed from state to UI
 Ex:
 function App(){
   let name="Ram"
   return <>name:{name}</>
 }

 two-way data binding : In  two-way data binding, the data is passed from state to UI and viceversa.
 Ex:
 function App(){
   let [name,setName]=useState("Ram");

   return(
     <>
       <h1>name:{name}</h1>
       <input type="text" onChnage{()=>{setName(e,target.value)}}/>
     </>
   )
 }

- Here , name is passed from state to UI
- when you enter name in UI(input) then state data name is also chnaged.

Conditional Rendering
=====================
Def : conditional rendering means based on certain conditions you want to show or hide JSX elements.
- for Conditional Rendering, we use : if-else,else-if,tenary operater and && etc,.,
Fragements in React:
====================
Definition: A Fragment is used to group multiple JSX elements without adding an extra HTML tag to the DOM.
          Why Use Fragment?
- It helps to avoid the group the multiple JSX elements with extra nodes in the DOM.
- Keeps your DOM clean and lightweight.
Ex:
<></>

How to use React-icons
======================
1. install react-icons
   npm install react-icons
2. import react-icons in component
   import { FaEdit, FaTrash } from 'react-icons/fa';
   import { BsFillCalendarDateFill,BsFillClockFill } from 'react-icons/bs';
3. use the Icons
   <FaEdit /> 
   <FaTrash color='red' />



















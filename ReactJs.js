
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



















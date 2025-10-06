
📝 Question Answer :



1. What is JSX, and why is it used?

Answer : 
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's not a separate templating language but rather syntactic sugar for React.createElement() calls.

 # Why JSX is used:
Readability: Makes React components more readable and intuitive

Expressiveness: Allows writing component structure that resembles the final HTML output

Type Safety: Provides compile-time error checking

Developer Experience: Enables better tooling and IDE support


Example: 

const element = <h1>Hello, World!</h1>;

// This compiles to:
const element = React.createElement('h1', null, 'Hello, World!');    


2. What is the difference between State and Props?

**State** is the component's own data that can change over time. **Props** are data passed from a parent component to a child component.

   State is the component’s own data, which the component can manage and update by itself.

   Props are data passed from a Parent Component to a Child Component, which the child can use but cannot modify.

   State is mutable (changeable) — it can be updated using functions like setState or useState.

   Props are immutable (unchangeable) — they cannot be directly updated inside the receiving component.

  State is declared inside the component, for example using useState() in functional components or this.state = {} in class components.

  Props are received as parameters, for example: function Child(props) { ... } or by destructuring like { title }.

  State is mainly used for dynamic or changeable data, such as input values, counters, or toggle states.

  Props are used to send data or functions from parent to child, so that the child component can display or use them.

Example : 

function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} onIncrement={() => setCount(count + 1)} />;
}

function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p> {/* Using props */}
      <button onClick={onIncrement}>Increase</button>
    </div>
  );
}

Props are for passing data down; State is for managing data within.


3 . What is the useState hook, and how does it work?


Answer : 
          useState is a built-in React Hook that allows functional components to store and manage state (dynamic data).

        Before Hooks, only class components could use state. But useState makes state possible in functional components too!

 How useState Works

const [count, setCount] = useState(0);

count → State variable (current value)

setCount → Function to update the state

0 → Initial value of the state

Whenever setCount is called, React updates the value and re-renders the component with the new data.

Example : 
       function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

}

Every time you click the button, setCount() updates the value
 The component re-renders and shows the new count

     useState lets a functional component remember values between renders and update them dynamically.


4. How can you share state between components in React?


Answer : 
       To share state between components, you lift the state up to their common parent and then pass it down as props.

    React does not allow direct state sharing between siblings, so the state must be stored in a parent component and distributed.

Example: 
<!-- Sharing State Between Two Child Components -->
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
}

function ChildA({ count }) {
  return <p>Current Count: {count}</p>;
}

function ChildB({ setCount }) {
  return <button onClick={() => setCount(prev => prev + 1)}>Increase</button>;
}


  Parent holds the shared state
  ChildA displays the state (read-only)
  ChildB updates the state (via callback)

 To share state between components, store it in a parent and pass it down via props — or use Context/Redux for global sharing.


5. How is event handling done in React?


Answer : React handles events using camelCase syntax and functions (usually arrow functions) instead of strings.


 Event names are written in lowercase in HTML (onclick) but in camelCase in React (onClick).

 HTML event handlers are written as strings ("doSomething()") while React expects a function reference ({doSomething}).

 In HTML, this refers to the DOM element by default, but in React you must bind or use arrow functions to control this.

 In HTML, returning false can prevent default behavior, but in React you must explicitly use event.preventDefault().

 React uses Synthetic Events (a cross-browser wrapper) instead of real DOM events like HTML.

 In HTML, event handlers are added directly to the DOM, but in React they are managed internally via the Virtual DOM.

Example : 
          
          function Button() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

inline arrow function:

 <button onClick={() => alert("Clicked!")}>Click Me</button>

Accessing Event Object : 

<button onClick={(e) => console.log(e.target)}>Log Event</button>


In React, events are handled using camelCase event names and by passing functions (not strings) as event handlers.

























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

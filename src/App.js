// 1. When starting an react application, declare functional components that similate the structure of the application.

// 2. Render static elements from a static array of data into the UI
// * When rendering a list of items, create a parent component that contains <ul> element. Then create a component that contains the <li> elements. This will similate the map function rendering data into the UI.
// * Conditionally add style to the element creating the UI by add a css object to the JavaScript mode.

// 3. Use the form element to submit data.
//  * Use preventDefault() to prevent a refresh when pressing enter.
//  * onSubmit() will pass the event object to the handler function that contains the value typed by user.
//  * Test event by logging event to the console.

// 4. Create controlled element to allow react to control elements instead of the DOM.
//  * Create a piece of state for the element that you want to control. <input /> for example.
//  * Set the value inside the element equal to the state. This value will be the value of the input element now meaning it can't be changed when typing.
//  * Create onChange() to update the state of the input element with set function (ie. setDescription). 
//  * Create an object that takes the value of the user input (mimic the dummy objects uesd to create the UI)
import { useState } from "react";

const initialData = [
  { 
    id: 1,
    description: "Go to work",
    completed: true
  },
  {
    id: 2,
    description: "Do laundry",
    completed: false
  },
  {
    id: 3,
    description: "Go to the mall",
    completed: false
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Form />
      <TaskList />
      <Statistics />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Task List Application</h1>
    </div>
  );
}

const Form = () => {
  const [ description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    const newTaskItem = { id: Date.now(), description, completed: false};
    console.log(newTaskItem);

    setDescription("");
  }

  const handleDescription = (e) => {
    // console.log(e); //targets the event
    // console.log(e.target); //targets the element
    // console.log(e.target.value); //targets the value
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Please type a task to complete in the input box.</h3>
      <input 
      type="text"
       placeholder="Enter a task . . ." 
       value={description}
       onChange={handleDescription}/>
      <button>Add Task</button>
    </form>
  );
}

const TaskList = () => {
  return (
    <ul className="task-list">
      {initialData.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </ul>
  );
}

const Task = ({item}) => {
  return (
    <li>
      <span style={item.completed ? { textDecoration: "line-through"} : {}}>
        {item.description}
      </span>
      <button>Del</button>
    </li>
  );
}

const Statistics = () => {
  return (
    <div>
      <footer className="stats">
        <em>You have x items on your list and you completed x task (x%).</em>
      </footer>
    </div>
  );
}

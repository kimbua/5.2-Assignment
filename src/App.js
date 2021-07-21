import './App.css';
import { useState } from "react";
import Button from "./components/Button";
import Result from "./components/Result";



function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const handleAdd1 = () => {
    setCount1(count1 + 1);
  };
  const handleAdd2 = () => {
    setCount2(count2 + 1);
  };
  const handleAdd = (value) => {
    setCount(count + value);
  };
  const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData)
}
  
  const [formData, setFormData] = useState({name:"",email:"",phone:"",passwordL:"",coPassword:""});
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }
  return (
    <div className="App">
      <p>Assignment 1</p>
      
      <div>{count1}</div>
      <button onClick={handleAdd1} >+</button>
      <p>Assignment 2</p>
      
      <Result count={count2} />
      <Button handleAdd={handleAdd2} value={1} />
      <p>Assignment 3</p>
      
      <div className="flex">
      <Button handleAdd={handleAdd} value={-1} />
      <Button handleAdd={handleAdd} value= {-10}/>
      <Result count={count} />
      <Button handleAdd={handleAdd} value={1} />
      <Button handleAdd={handleAdd} value={10} />
      </div>
      <p>Assignment 4</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label htmlFor="phone">Phone Number:</label>
        <input type="number" name="phone" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <label htmlFor="coPassword">Password:</label>
        <input type="password" name="coPassword" onChange={handleChange} />
        <br />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>

  );
}

export default App;




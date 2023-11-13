import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

const styles = {
  heading: {
    background: 'cadetblue',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '50px 20px',
    
  },
  content: {
    padding: 20,
  },
};
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({type: null, message: null});
  console.log(error)
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const checkForm = (e) => {
    console.log(error)
   
    if (e.target.name === "name"){
      if (e.target.value === ""){
        setError({type: "name", message: "Field is Required"})
        return
      }
    }
    if (e.target.name === "message"){
      if (e.target.value === ""){
        setError({type: "message", message: "Field is Required"})
        return
      }
    } 
    if (e.target.name === "email"){
      if (!validateEmail(e.target.value)){
        console.log("Invalid Email")
        setError({type: "email", message: "Invalid Email"})
        return
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return;
    }
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setMessage('Please enter email and name');
      return;
    }
    if (!message) {
      setMessage(
        `Please enter Message`
      );
      return;
    }
    alert(`Thank you for your message!`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={styles.heading}>
      
      <form className="form-control">
      <div class="col-md-6">
      
      <label for="inputName" class="form-label">Name</label>
      {error.type === "name" ? <p>{error.message}</p> : ""}
      <br></br>
        <input
         onFocus={() => setError({type: null, message: null})}
         onBlur={(e) => checkForm(e)}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="John Doe"
        /></div>
        <div class="col-md-6">
         
        <label for="inputName" class="form-label">Email</label> 
        {error.type === "email" ? <p>{error.message}</p> : ""}
        <br></br>
        <input
          onFocus={() => setError({type: null, message: null})}
          onBlur={(e) => checkForm(e)}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="username@email.com"
        /></div>
         <div class="col-12">
        
         <label for="inputName" class="form-label">Message</label> 
         {error.type === "message" ? <p>{error.message}</p> : ""}
        <br></br>
        <textarea
        onFocus={() => setError({type: null, message: null})}
        onBlur={(e) => checkForm(e)}
        value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message Here"
        /></div>
        <button type="button" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>

    </div>
  );
}

export default Form;
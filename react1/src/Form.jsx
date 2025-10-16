import React, { useState } from 'react'

const Form= () => {
  const [formData,SetformData]=useState({
    
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;  
    SetformData({
      ...formData,
      [name]:value,
    });
  };
   const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data Submitted:", formData);
    alert(`Welcome, ${formData.name}!`);
  };
  return (
    <div className='table'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Gender">Gender</label>
        <input type="radio" name="gender" value="male" onChange={handleChange}/>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" value="female" onChange={handleChange}/>
        <label htmlFor="Female">Female</label>
        <br/>
        <label htmlFor="name">Name</label>
        <input name="person"type="text" placeholder='enter your name' onChange={handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder='enter your email' onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder='password ' onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
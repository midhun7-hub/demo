import React from 'react'
import { useState } from 'react'
const Form = () => {
  const [form,setForm] = useState({
    name:"",
    email:"",
    age:"",
    department:""
  })
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}/>
        <br />  <br />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={form.age} onChange={handleChange}/>
        <br /><br />
        <label htmlFor="department">Department:</label>
        <select name="department" value={form.department} onChange={handleChange}>
          <option value="">Select</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Engineering">Engineering</option>
        </select>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
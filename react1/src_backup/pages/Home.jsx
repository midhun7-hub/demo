import React from 'react'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import Form from '../hooks/Form'
import State from '../hooks/State'

const Home = () => {
  return (
    <div>
      <Parent />
      <State />
      <Profile name="midhun" age={20} skills={["HTML","JS","CSS","React","MongoDB"]}/>
      <Form />
    </div>
  )
}

export default Home
import React from 'react'

const Profile = ({name,age,skills}) => {
  return (
    <div>
        <h1>I am {name} and {age} years old</h1>
        <ul>
            {skills.map((Skills)=>{
              return  <li>{Skills}</li>
            })}
        </ul>
    </div>
  )
}

export default Profile
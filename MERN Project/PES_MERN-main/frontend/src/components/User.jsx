import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>I am {props.name} from {props.dept} ,{props.age} old
        </h1>
    </div>
  )
}

export default User
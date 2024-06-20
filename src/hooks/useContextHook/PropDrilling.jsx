import React, { useState } from 'react'
const ParentComponent = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: 'Yaseswi',
        lastName : 'Namala',
        email: 'ssv@gmail.com'
    });
  return (
    <div>
      <h3>Parent Component </h3>
      <ChildComponent userDetails = {userDetails}/>
    </div>
  )
}

const ChildComponent = (props) =>{
    // console.log(props.userDetails)
    return(
        <div>
            <h3>Child Component </h3>
            <SubChildComponent userDetails = {props.userDetails}/>
        </div>
    )
}

const SubChildComponent = ({userDetails}) => {
    return(
        <div>
            <h3>Sub Child Component </h3>
        <h4>Firstname: {userDetails.firstName}</h4>   
        <h4>Lastname: {userDetails.lastName}</h4> 
        <h4>Email: {userDetails.email}</h4>       
        </div>
    )
}
export default ParentComponent

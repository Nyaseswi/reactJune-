import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const IssueSolve = () => {
    const data = useContext(UserContext);
    const { firstName, lastName, email } = data
    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
        </div>
    )
}



export default IssueSolve

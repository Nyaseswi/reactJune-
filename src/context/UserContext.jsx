import React from 'react'

// creating object 
const userDetails = {
    firstName: 'Yaseswi',
    lastName: 'Namala',
    email:'ssv@gamil.com'
}

// creating context 
export const UserContext = React.createContext()

// creating provider 
export const UserContextProvider = ({children}) =>{
    return(
        <UserContextProvider value={userDetails} >
            {children}
        </UserContextProvider>
    )
}
// named exporting done 
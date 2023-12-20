import React , {createContext} from "react";

export const Globalcontext=createContext()
const GlobalContextProvider=(props)=>{
    const student={
        fName:'Ramesh',
        lName:'khadka',
        address:'kathmandu'
    }
    return(
        <Globalcontext.Provider value={student}>
            {props.children }

        </Globalcontext.Provider>

    )

}
export default GlobalContextProvider
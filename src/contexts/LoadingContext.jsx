

import { createContext, useState } from "react";

export const LoadingContext = createContext(false)



export default function Context({children}){
    const [load,setload] = useState(false)

    return(
        <LoadingContext.Provider value={{ load ,setload}}>
             {children}
        </LoadingContext.Provider>
    )
}
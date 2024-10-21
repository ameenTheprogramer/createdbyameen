

import { createContext, useState } from "react";

export const LoadingContext = createContext({
    load: false,        // Default initial value for load
    setload: () => {}   // Placeholder for the setload function
});


export default function Context({children}){
    const [load,setload] = useState(false)

    return(
        <LoadingContext.Provider value={{ load ,setload}}>
             {children}
        </LoadingContext.Provider>
    )
}
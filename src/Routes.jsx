 
import { useRoutes } from "react-router-dom";
 import Coctails from "./Coctails";
import Counter from "./Counter";
const Routes=( )=>{
   
  
    return useRoutes(
        [
            {
                path:"/",
                element:<Counter  />
            },
            {
                path:"/coctails",
                element:<Coctails/>
            }
            
        ]
    )
}
export default Routes;
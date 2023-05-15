import MainRoot from "../MainRoot";
import Products from "../Products";
import Detail from "../Detail";
import AddProduct from "../AddProduct";
export const ROUTES =[
    //Main Root
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'/',
                element:<Products/>
            },
            {
                path:'detail/:id',
                element:<Detail/>
            },
          
            {
                path:'add',
                element:<AddProduct/>
            },
            
            
            
    
        ]
    },




]
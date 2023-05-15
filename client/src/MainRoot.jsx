import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const MainRoot = () => {
  return (
    <>
     <Navbar/>
 <Outlet/>
 {/* <Footer/> */}
    
    </>

  )
}

export default MainRoot
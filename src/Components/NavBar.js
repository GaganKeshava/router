import { useContext } from "react";
import { NavLink } from "react-router-dom"
import '../Style.css';
import {AuthContext} from './AuthProvider';


function NavBar() {
    // const Style = ({isActive}) => {
    //     return {
    //         fontWeight: isActive ? 700 : 400
    //     }
    // }
    const auth = useContext(AuthContext);
  return (
   <nav className="primary">
        {/* <NavLink to='/' style={Style}>Home</NavLink> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
   </nav>
    )
}

export default NavBar
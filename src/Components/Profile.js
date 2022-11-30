import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider"

export const Profile = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      <h3>Welcome {auth.user}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

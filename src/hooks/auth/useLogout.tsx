import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

// custom hook for logout
export const useLogout = (): (() => void) => {
  // select setIsAuthenticated from auth context
  const authContext = useContext(AuthContext);

  // use null assertion, because authContext is not null
  const { setIsAuthenticated } = authContext!;

  // init navigate
  const navigate = useNavigate();

  // logout function
  const logout = (): void => {
    // remove token and user data from cookies
    Cookies.remove("token");
    Cookies.remove("user");
    setIsAuthenticated(false);
    // redirect to login
    navigate("/login");
  };
  return logout;
};

import Cookies from "js-cookie";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useAuthUser = (): User | null => {
  // select user data from cookies
  const user = Cookies.get("user");
  // if user data found, parse JSON andreturn user data,
  // else return null
  return user ? JSON.parse(user) : null;
};

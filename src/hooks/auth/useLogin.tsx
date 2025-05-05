import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api";

// interface login request
interface LoginRequest {
  username: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    // mutation for login
    mutationFn: async (data: LoginRequest) => {
      // use Api for login
      const response = await Api.post("/api/login", data);
      return response.data;
    },
  });
};

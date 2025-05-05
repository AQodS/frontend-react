import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api";

// interface for register
interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  return useMutation({
    // mutation for register
    mutationFn: async (data: RegisterRequest) => {
      // use Api for register
      const response = await Api.post("api/register", data);
      return response.data;
    },
  });
};

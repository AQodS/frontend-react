import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api";
import Cookies from "js-cookie";

export interface UserRequest {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useUserUpdate = () => {
  return useMutation({
    // mutation function
    mutationFn: async ({ id, data }: { id: number; data: UserRequest }) => {
      //get token from cookies
      const token = Cookies.get("token");

      //get user by id from api
      const response = await Api.put(`/api/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return data
      return response.data;
    },
  });
};

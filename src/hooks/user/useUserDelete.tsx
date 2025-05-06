import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api";
import Cookies from "js-cookie";

export const useUserDelete = () => {
  return useMutation({
    // mutation function
    mutationFn: async (id: number) => {
      //get token from cookies
      const token = Cookies.get("token");

      //requst delete user by id from api
      const response = await Api.delete(`/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return data
      return response.data;
    },
  });
};

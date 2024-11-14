// import axios from "axios";
import instance from "../interceptor";

const token = localStorage.getItem("token");
export const getProfile = async () => {
  try {
    const response = await instance.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    return response;
  } catch (error) {
    console.error("Error in fetching profile:", error);
    return false;
  }
};

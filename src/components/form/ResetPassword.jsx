import { useEffect, useState } from "react";
import axios from "axios";
import ForgetPassword from "./ForgetPassword";
import toast from "react-hot-toast";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function ResetPassword({ isOpen, ConfigValue }) {
  const [isForgetPasswordOpen, setForgetPasswordOpen] = useState(false);

  const fetchConfigValue = async (ConfigValue) => {
    try {
      const response = await axios.get(
        "https://classapi.sepehracademy.ir/api/Sign/Reset " + ConfigValue
      );
      if (response.status === 200) {
        return response.data.ConfigValue;
      } else {
        throw new Error("مشکلی در دریافت لینک بازنشانی رخ داده است");
      }
    } catch (error) {
      toast.error("خطا: " + error.message);
    }
  };

  useEffect(() => {
    if (isOpen && ConfigValue) {
      setForgetPasswordOpen(true);
    }
  }, [isOpen, ConfigValue]);
  // console.log(ConfigValue);

  return (
    <>
      <ForgetPassword
        isOpen={isForgetPasswordOpen}
        onClose={() => setForgetPasswordOpen(false)}
        ConfigValue={fetchConfigValue}
      />
    </>
  );
}

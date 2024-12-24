import { ajaxCall } from "../axios/AjaxCall";
import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";

const SessionActive = () => {
  const [userDetails, updateUserDetails] = useContext<any>(UserContext);
  const userEmail = userDetails?.userEmail || localStorage.getItem("userEmail");
  const [returnVal, setReturnVal] = useState<boolean | null>(null);

  const helper = async () => {
    const response: any = await ajaxCall({
      url: `api/session/active?userId=${userEmail}`,
    });
    setReturnVal(response.data || false);
    if (response && response.data) {
      console.log("response from active api", response);
      updateUserDetails((prev: any) => ({
        ...prev,
        active: response.data,
        userEmail,
      }));
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("active", `${response.data}`);
    } else {
      localStorage.clear();
    }
  };

  useEffect(() => {
    helper();
  }, []);

  return returnVal;
};

export default SessionActive;

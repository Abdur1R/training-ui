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
    if (response) {
      console.log("response from active api", response);
      setReturnVal(response.data);
      updateUserDetails((prev: any) => ({
        ...prev,
        active: response.data,
        userEmail,
      }));
      if (response) {
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("active", `${response.data}`);
      } else {
        localStorage.clear();
      }
    }
  };

  useEffect(() => {
    helper();
  }, []);

  return returnVal;
};

export default SessionActive;

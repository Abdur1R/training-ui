import React, { useEffect } from "react";
import { ajaxCall } from "../axios/AjaxCall";

const SignIn = () => {
    const fetchAllUserDetails = () => {
        fetch("https://samplespringboot-production.up.railway.app/userDetails/getData/admin-abdur")
            .then((response1) => response1.json())
            .then((response2) => {
                console.log("response2", response2);
            })
        ajaxCall({ url: "userDetails/getData/admin-abdur" })
            .then((response) => {
                console.log("response", response);
            });
    };

    useEffect(() => {
        fetchAllUserDetails();
    }, []);

    return (
        <>Hello, This page is for SignIn</>
    )
};

export default SignIn;
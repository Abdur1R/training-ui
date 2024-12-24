import React, { useContext, useEffect, useState } from "react";
import "./AppLayout.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import { ajaxCall } from "./axios/AjaxCall";
import Dropdown from "antd/es/dropdown/dropdown";

export const UrlKeyWords: any = {
    "/": "Projects",
    "/todolist": "To-Do-List",
    "/jobPortal": 'Job Portal'
};

const AppLayout = ({ children }: any) => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [userDetails, updateUserDetails] = useContext<any>(UserContext);
    const userEmail = userDetails?.userEmail || localStorage.getItem("userEmail");
    const userName = (localStorage.getItem('userName') || userDetails.userName) ?? "";
    const [state, updateState] = useState<any>({
        userName: (localStorage.getItem('userName') || userDetails.userName) ?? "",
        firstName: (userName && userName.split(" ")[0]) ?? "",
        lastName: (userName && userName.split(" ")[1]) ?? ""
    });

    console.log('state', state);
    console.log("userDetails", userDetails);
    console.log("localStorage", localStorage);
    console.log("userEmail", userEmail);

    const GetUserDetails = () => {
        if (!(state.userName && state.userName.length > 0)) {
            ajaxCall({ url: `userDetails/getData/${userEmail}` })
                .then((response: any) => {
                    if (response.status === 200 && Object.values(response.data).length > 0) {
                        const respData = response.data;
                        console.log('Response from getUserDetails', response);
                        const fullName = `${respData.firstName ?? "Guest"} ${respData.lastName ?? "User"}`;
                        localStorage.setItem('userName', fullName);
                        updateState((prev: any) => (
                            { ...prev, userName: fullName, firstName: respData.firstName, lastName: respData.lastName }
                        ));
                        updateUserDetails((prev: any) => ({ ...prev, userName: fullName }));
                    }
                });
        }
    };

    useEffect(() => {
        GetUserDetails();
    }, []);

    return (
        <div className="d-flex-col">
            {(location !== "/signin" && location !== "/signup") && !location.includes("/portfolio") && (state.userName && state.userName.length > 0) &&
                <div className="mainHeader">
                    <div style={{ marginLeft: '30px', fontSize: '16px' }}>{UrlKeyWords[location]}</div>
                    <div className="d-flex-row" style={{
                        margin: '1.2% 3%', gap: '10px', alignItems: "baseline",
                    }}>
                        <div className="userName">{state.userName || 'Guest Name'}</div>
                        <Dropdown
                            trigger={["click"]}
                            menu={
                                {
                                    items: [{
                                        label: (<>Log Out</>), key: "Log Out", onClick: () => {
                                            localStorage.clear();
                                            updateUserDetails({});
                                            navigate("/");
                                        }
                                    }]
                                }}
                        >
                            <div className="profPic">{(state.firstName[0] ?? "G")}{(state.lastName[0] ?? "U")}</div>
                        </Dropdown>
                    </div>
                </div>
            }
            <div>
                {children}
            </div>
        </div >
    );
};

export default AppLayout;
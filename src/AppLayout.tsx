import React from "react";
import "./AppLayout.scss";

const AppLayout = ({ children }: any) => (
    <>
        <div className="mainHeader">
        </div>
        <div>
            {children}
        </div>
    </>
);

export default AppLayout;
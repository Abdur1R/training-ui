import React from "react";
import { Input } from "antd";
import "./Calci.scss";

const keyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "AC", "+", "*", "-", "/", "="];

const Calci = () => {
    return (
        <div className="calci">
            <div className="display">
                <Input />
            </div>
            <div className="bodyKeys">
                {keyList.map((item) => (
                    <div className="buttonKey">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calci;
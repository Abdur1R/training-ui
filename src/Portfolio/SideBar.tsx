import React from "react";
import { Anchor } from "antd";

const SideBar = (props: any) => (
    <Anchor
        items={props?.menuList ?? []}
        affix={true}
    />
);

export default SideBar;
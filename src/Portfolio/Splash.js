import React, { Component } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../Loader/LoaderLogo.js";
import PortFolio from "./Portfolio.tsx";

function AnimatedSplash(props) {
    return (
        <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
            {/* <LoaderLogo id="logo" theme={props.theme} /> */}
            <div className="nameText">Abdur Rahman Shaik</div>
        </div>
    );
}

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 5450);
    }

    componentWillMount() {
        clearTimeout(this.id);
    }

    render() {
        return this.state.redirect ? (
            <PortFolio />
        ) : (
            <AnimatedSplash theme={{
                body: "#EDF9FE",
                text: "#001C55",
                expTxtColor: "#000a12",
                highlight: "#A6E1FA",
                dark: "#00072D",
                secondaryText: "#7F8DAA",
                imageHighlight: "#0E6BA8",
                compImgHighlight: "#E6E6E6",
                jacketColor: "#0A2472",
                headerColor: "#0E6BA877",
                splashBg: "#001C55",
            }} />
        );
    }
}

export default Splash;
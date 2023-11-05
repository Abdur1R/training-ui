import React, { ReactElement } from "react";
import AllRoutes from './AllRoutes.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";
import AppLayout from "./AppLayout.tsx";

const App = () => (
    <div className="App">
        <AppLayout>
            <BrowserRouter>
                <Routes>
                    {
                        AllRoutes.map((item: any, index: number) => (
                            <Route
                                path={item.path}
                                Component={item.component}
                            />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </AppLayout>
    </div>
);

export default App;

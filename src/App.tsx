import React, { ReactElement } from "react";
import AllRoutes from './AllRoutes.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => (
    <div className="App">
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
    </div>
);

export default App;

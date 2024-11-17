import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import AllRoutes from "./AllRoutes.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";
import AppLayout from "./AppLayout.tsx";

export const UserContext = createContext({});

const App = () => {
  const [userDetails, updateUserDetails] = useState<any>({ userEmail: "" });
  return (
    <div className="App">
      <UserContext.Provider value={[userDetails, updateUserDetails]}>
        <AppLayout>
          <Routes>
            {AllRoutes.map((item: any, index: number) => (
              <Route path={item.path} Component={item.component} />
            ))}
          </Routes>
        </AppLayout>
      </UserContext.Provider>
    </div>
  );
};

export default App;

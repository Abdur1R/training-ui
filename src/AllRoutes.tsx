import Calci from "./Calculator/Calci.tsx";
import ChatAPI from "./ChatAPI/ChatAPI.tsx";
import CricketGame from "./CricketGame/CricketGame.tsx";
import Heart from "./Heart/Heart.tsx";
import JobPortal from "./JobPortal/JobPortal.tsx";
import LandingPage from "./LandingPage/LandingPage.tsx";
import PortFolio from "./Portfolio/Portfolio.tsx";
import SignIn from "./SignIn/SignIn.tsx";
import SignUp from "./SignUp/SignUp.tsx";
import TodoList from "./ToDoList/ToDoList.tsx";

const AllRoutes = [
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/todolist",
    component: TodoList,
  },
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/chatapi",
    component: ChatAPI,
  },
  {
    path: "/heart",
    component: Heart,
  },
  {
    path: "/calculator",
    component: Calci,
  },
  {
    path: "/portfolio/:section",
    component: PortFolio,
  },
  {
    path: "/cricketgame",
    component: CricketGame,
  },
  {
    path: "/jobPortal",
    component: JobPortal,
  },
];

export default AllRoutes;

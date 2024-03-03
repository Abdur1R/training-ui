import ChatAPI from "./ChatAPI/ChatAPI.tsx";
import Heart from "./Heart/Heart.tsx";
import LandingPage from "./LandingPage/LandingPage.tsx";
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
        path: '/',
        component: LandingPage,
    },
    {
        path: "/chatapi",
        component: ChatAPI,
    },
    {
        path: "/heart",
        component: Heart,
    }
];

export default AllRoutes;
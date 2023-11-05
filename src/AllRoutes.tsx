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
    }
];

export default AllRoutes;
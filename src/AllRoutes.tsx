import SignIn from "./SignIn/SignIn.tsx";
import SignUp from "./SignUp/SignUp.tsx";

const AllRoutes = [
    {
        path: "/signin",
        component: SignIn,
    },
    {
        path: "/signup",
        component: SignUp,
    },
];

export default AllRoutes;
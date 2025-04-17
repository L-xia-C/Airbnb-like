import React from "react"
import { Navigate } from "react-router"
const Home = React.lazy(()=>import("@/views/home"))
const Entire = React.lazy(()=>import("@/views/entire"))
const Deatail = React.lazy(()=>import("@/views/detail"))
const Countdown=React.lazy(()=>import("@/views/demo"))
const routers = [
    {
        path:"/",
        element:<Navigate to="/home" />
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/entire",
        element:<Entire/>
    },
    {
        path:"/detail",
        element:<Deatail/>
    },
    {
        path:"/demo",
        element:<Countdown/>
    }
]
export default routers
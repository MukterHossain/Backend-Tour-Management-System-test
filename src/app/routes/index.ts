import { Router } from "express";
import { UserRouters } from "../modules/user/user.route";


 export const router = Router()

 const modulesRoute = [
    {
        path: "/user",
        route: UserRouters
    }
]

modulesRoute.forEach((route) =>{
    router.use(route.path, route.route)
})
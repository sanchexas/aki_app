import { Router } from "express";
import  UserController  from "../controllers/UserController";

const UserRouter = Router();

UserRouter.post("/create/user",UserController.createUser)
UserRouter.post("/create/areaholder",UserController.createAreaHolder)

export default UserRouter
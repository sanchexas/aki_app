import { Router } from "express";
import  UserController  from "../controllers/UserController";

const UserRouter = Router();

UserRouter.post("/create",UserController.create)

export default UserRouter
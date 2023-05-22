import { Router } from "express";
import  AreaController  from "../controllers/AreaController";

const AreaRouter = Router();

AreaRouter.post("/all",AreaController.getAll)
export default AreaRouter
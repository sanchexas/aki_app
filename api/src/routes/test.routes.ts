import { Router } from "express";
import testController from "../controllers/test.controller";

const testRouter = Router();

testRouter.get('/', testController.testMethod);
testRouter.get('/testsecond', testController.testSecondMethod);

export default testRouter;
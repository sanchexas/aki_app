import { Request, Response } from "express";

class TestController{
    testMethod(req: Request, res: Response){
        res.json({message: "You just reached the TEST !!!"});
    }
    testSecondMethod(req: Request, res: Response){
        res.json({message: "You just reached the SECOND TEST !!!"});
    }
}

export default new TestController;
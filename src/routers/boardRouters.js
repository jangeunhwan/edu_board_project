import express from "express";
import { 
    listController,
    detailController,
    editController,
    writeController
 } from "../controllers/boardController";

const boardRouter = express.Router();


boardRouter.get("/list", listController);
boardRouter.get("/write", writeController);
boardRouter.get("/edit", editController);
boardRouter.get("/detail", detailController);

export default boardRouter;
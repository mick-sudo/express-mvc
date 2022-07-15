import express from "express";
import { UsersContoller } from "../controller/usersController";

const router = express.Router();
const controller = new UsersContoller();
router.get('', controller.displayUser);
router.get('/delete/:id', controller.deleteUser);

export default router;
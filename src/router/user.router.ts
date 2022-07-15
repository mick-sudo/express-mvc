import express from "express";
import { UsersContoller } from "../controller/usersController";

const router = express.Router();
const controller = new UsersContoller();
router.get('', controller.displayUser);
router.get('/delete/:id', controller.deleteUser);
router.get('/createPage', controller.createUserPage);
router.post('/create', controller.addUser);

export default router;
import { UserModel } from "../modell/userModel";
import { Request, Response } from "express";

export class UsersContoller {
  userModel: UserModel = new UserModel();

  displayUser = async (req: Request, res: Response) => {
    let users = await this.userModel.getAllUser().then(item => item)
    res.render('users', { users })
  }

  deleteUser = async (req: Request, res: Response) => {
    let users = await this.userModel.getAllUser().then(item => item)
    res.render('users', { users })
  }

}

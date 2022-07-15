import { UserModel } from "../modell/userModel";
import { Request, Response } from "express";

export class UsersContoller {
  userModel: UserModel = new UserModel();

  displayUser = async (req: Request, res: Response) => {
    let users = await this.userModel.getAllUser().then(item => item)
    res.render('users', { users })
  }


  deleteUser = async (req: Request, res: Response) => {
    let status = await this.userModel.deleteUser(req.params.id).then(value => value)
    console.log(status)
    if (status == 200) {
      res.redirect('/users')
    }
  }



}

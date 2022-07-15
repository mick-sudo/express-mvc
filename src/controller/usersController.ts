import { UserModel } from "../modell/userModel";
import { Request, Response } from "express";
import { User } from "../model/user";

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

  createUserPage = (req: Request, res: Response) => {
    res.render('create')
  }

  addUser = async (req: Request, res: Response) => {
    const user = new User(req.body.company, req.body.username, req.body.email)
    let data = await this.userModel.addUser(user).then(data => data)
    console.log(data)
    res.redirect('/users')
  }




}

import axios from "axios";
import { User } from "../model/user";
import 'dotenv/config'

export class UserModel {
  userTable: User[] = [new User()]
  URI: string | undefined = process.env.URI
  getAllUser = (): Promise<UserModel> => {
    return axios.get(this.URI + '/users').then(item => item.data)
  }
  deleteUser = async (id: string) => {
    const resp = await axios.delete(`${this.URI}/users/${id}`);
    return resp.status;

  }

}


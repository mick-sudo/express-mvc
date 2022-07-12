import { Adress } from "./adress"
import { Company } from "./company"
import { Geo } from "./geo"

export class User {
  public id: number
  public username: string
  public email: string
  public geo: Geo | undefined
  public adress: Adress | undefined
  public company: Company | undefined

  constructor(id: number = 0, username: string = "", email: string = "", geo: Geo = new Geo(), adress: Adress = new Adress(), company: Company = new Company()) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.geo = geo;
    this.adress = adress;
    this.company = company;
  }
}






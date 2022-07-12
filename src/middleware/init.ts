import express, { Express } from "express";
import path from "path";
import defaultRouter from "../router/default.router";
import userRouter from "../router/user.router";

export class init {

  app: Express;

  constructor(app: Express) {
    this.app = app
    this.generate()
    this.setRouter()
    this.setStaticRoute()
  }

  generate = () => {
    // on set le generateur de template ejs
    this.app.set('view engine', 'ejs');
    // on specifie ou se trouve les templates
    this.app.set('views', path.join(process.cwd(), 'src/view'));

    this.app.use(express.urlencoded({
      extended: true
    }))
  }

  setStaticRoute = () => {
    this.app.use('/bootstrap', express.static(
      path.join(process.cwd(), '/node_modules/bootstrap/dist/css'))
    );

    this.app.use('/static', express.static(
      path.join(process.cwd(), '/src/public'))
    );
  }

  setRouter = () => {
    this.app.use('/users', userRouter)
    this.app.use(defaultRouter)
  }



}
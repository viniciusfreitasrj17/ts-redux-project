import express, { Application } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

import router from './routes';

class App {
  public application: Application;

  constructor() {
    this.application = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.application.use(express.json());
    this.application.use(cors());
  }

  private database(): void {
    connect('mongodb://localhost:27017/ts-redux-project', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  private routes(): void {
    this.application.use(router);
  }
}

export default new App().application;

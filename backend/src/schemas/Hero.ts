import { Schema, model, Document } from 'mongoose';

interface IHero extends Document {
  name: string;
  imgSrc: string;
}

const HeroSchema = new Schema(
  {
    name: String,
    imgSrc: String
  },
  {
    timestamps: true
  }
);

export default model<IHero>('Hero', HeroSchema);

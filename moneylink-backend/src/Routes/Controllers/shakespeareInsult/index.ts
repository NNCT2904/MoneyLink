import { Request, Response } from "express";
import { randomInsultGenerator } from "./insultGenerator";

const shakespeareInsult = (req: Request, res: Response) => {
  const insult = randomInsultGenerator();
  res.send(insult);
};

export default shakespeareInsult;
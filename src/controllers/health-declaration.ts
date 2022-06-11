import { NextFunction, Request, Response } from "express";

export const postHealthDeclaration = (req: Request, res: Response) => {
  const { name, temperature } = req.body;
  console.log(req.body);
  // Write to database
  res.json({ name, temperature });
};

export const getHealthDeclarations = (req: Request, res: Response) => {
  // Read from database
  const mockData = [
    { name: "Celine Wong", temperature: 36.4 },
    { name: "John Pang", temperature: 36.9 },
  ];
  res.json(mockData);
};

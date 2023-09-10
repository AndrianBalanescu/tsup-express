import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'All users' });
};

export const getUser = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Single user' });
};

export const createUser = (req: Request, res: Response): void => {
  res.status(201).json({ message: 'User created' });
};

export const updateUser = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'User updated' });
};

export const deleteUser = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'User deleted' });
};
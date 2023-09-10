import { Request, Response } from 'express';

export const getAllProducts = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'All products' });
};

export const getProduct = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Single product' });
};

export const createProduct = (req: Request, res: Response): void => {
  res.status(201).json({ message: 'Product created' });
};

export const updateProduct = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Product updated' });
};

export const deleteProduct = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Product deleted' });
};
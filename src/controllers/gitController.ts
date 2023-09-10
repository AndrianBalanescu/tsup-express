import { Request, Response, NextFunction } from 'express';
import { githubProfile } from '../funcs/githubProfile';

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await githubProfile();
    res.json(profile);
  } catch (error) {
    next(error);
  }
};
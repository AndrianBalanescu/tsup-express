import { Request, Response, NextFunction } from 'express';
import { githubProfile } from '../funcs/githubProfile';
import { logger } from '../config/logger';
import { log } from 'console';

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await githubProfile();
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const postProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: 'Post request made' });
  } catch (error) {
    next(error);
  }
};

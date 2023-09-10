import {Request, Response, NextFunction } from 'express';
import { githubProfile } from '../funcs/githubProfile';
import { logger } from '../config/logger';

/**
 * Middleware for logging the request and response
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next function
 */
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`[${req.method}] ${req.originalUrl} - ${req.ip}`);
  next();
};
// export const loggerMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
//   if(error){
//   logger.error(error);
//   res.status(500).json({ message: 'Something went wrong' });
//   } else {
//     logger.info(`[${req.method}] ${req.originalUrl} - ${req.ip}`);
//     res.status(200).json({ message: 'Success' });
//   }
//   logger.info(`[${req.method}] ${req.originalUrl} - ${req.ip}`);
//    next()
// };

/**
 * Middleware for getting a profile
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next function
 */
export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await githubProfile();
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

/**
 * Middleware for posting a profile
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next function
 */
export const postProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await githubProfile();
    res.json(profile);
    // throw new Error('Error thrown flowmaster!3');
  } catch (error) {
    logger.error(error)
    next(error);
  }
};
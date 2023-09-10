import express, { Request, Response, Router } from 'express';
import * as productController from '../controllers/productController';

const router: Router = express.Router();

/**
 * Route for handling GET and POST requests to /products
 *
 * @route GET /products
 * @route POST /products
 * @group Products - Operations related to products
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
router.route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

/**
 * Route for handling GET, PATCH, and DELETE requests to /products/:id
 *
 * @route GET /products/{id}
 * @route PATCH /products/{id}
 * @route DELETE /products/{id}
 * @group Products - Operations related to products
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
router.route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
// import express from 'express';
// import authUser from '../middlewares/authUser.js';
// import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';
// import authSeller from '../middlewares/authSeller.js';

// const orderRouter = express.Router();

// orderRouter.post('/cod', authUser, placeOrderCOD)
// orderRouter.get('/user', authUser, getUserOrders)
// orderRouter.get('/seller', authSeller, getAllOrders)
// orderRouter.post('/stripe', authUser, placeOrderStripe)

// export default orderRouter;

import express from 'express';
import authUser from '../middlewares/authUser.js';
import authSeller from '../middlewares/authSeller.js';
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  placeOrderStripe,
  cancelOrder
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD);
orderRouter.get('/user', authUser, getUserOrders);
orderRouter.get('/seller', authSeller, getAllOrders);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.put('/:id/cancel', authUser, cancelOrder); // 👈 Cancel Order Route

export default orderRouter;

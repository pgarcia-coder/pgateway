import express from 'express';
import controllerHandler from '../middleware/controller-handler';
import pgatewayController from './pgateway.controller';
import { PGateway_ActionInput } from './pgateway.dto';

const router = express.Router();

// Keep routes in a single line
/* eslint function-call-argument-newline: ["error", "never"] */
/* eslint function-paren-newline: ["error", "never"] */

router.post('/', controllerHandler({ controller: pgatewayController.action, type: PGateway_ActionInput }));

export = router;
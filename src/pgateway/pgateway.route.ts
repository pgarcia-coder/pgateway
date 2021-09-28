import express from 'express';
import controllerHandler from '../middleware/controller-handler';
import * as pgatewayController from './pgateway.controller';
import { ProcessActionParams } from './pgateway.dto';

const router = express.Router();

// Keep routes in a single line
/* eslint function-call-argument-newline: ["error", "never"] */
/* eslint function-paren-newline: ["error", "never"] */

router.post('/process-action', controllerHandler({ controller: pgatewayController.processAction, type: ProcessActionParams }));

export = router;
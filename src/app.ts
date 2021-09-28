import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import healthRouter from './health/health.route';
import pgatewayRouter from './pgateway/pgateway.route';
import errorHandler from './middleware/error-handler';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/health', healthRouter);
app.use('/pgateway', pgatewayRouter);

app.use(errorHandler);

export = app;

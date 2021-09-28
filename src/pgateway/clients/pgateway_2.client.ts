import { PGatewayClient } from './pgateway-client.interface';

const client: PGatewayClient = {
  pay: () => 'PGateway_2 payment process successfully',
  reimburse: () => 'PGateway_2 reimburse process successfully',
};

export = client;

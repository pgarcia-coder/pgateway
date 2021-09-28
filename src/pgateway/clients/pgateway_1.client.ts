import { PGatewayClient } from './pgateway-client.interface';

const client: PGatewayClient & { partialReimburse(): string } = {
  pay: () => 'PGateway_1 payment process successfully',
  reimburse: () => 'PGateway_1 reimburse process successfully',
  partialReimburse: () => 'PGateway_1 partialReimburse process successfully',
};

export = client;

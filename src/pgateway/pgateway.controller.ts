import { ProcessAction } from './pgateway.dto';
import { PGatewayClient } from './clients/pgateway-client.interface';
import pGatewayService from './pgateway.service';
import { pGatewayClient_1, pGatewayClient_2 } from './clients';

const CLIENT_TYPES = {
  PGATEWAY_1: 'pgateway_1',
  PGATEWAY_2: 'pgateway_2',
};

const clientFromType = (type: string): PGatewayClient => {
  switch (type) {
    case CLIENT_TYPES.PGATEWAY_1:
      return pGatewayClient_1;
    case CLIENT_TYPES.PGATEWAY_2:
      return pGatewayClient_2;
    default:
      throw new Error('Invalid pgateway type');
  }
};

const processAction: ProcessAction = ({ body: { action, type } }) =>
  pGatewayService(clientFromType(type))(action);

export { processAction };

import { PGatewayClient } from './clients/pgateway-client.interface';

export = (client: PGatewayClient) =>
  (action: string): string => {
    const clientAction = client[action as keyof PGatewayClient];

    if (!clientAction) {
      throw new Error('Action not allowed');
    }

    return clientAction();
  };

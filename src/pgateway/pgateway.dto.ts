export class PGateway_ActionInput {
  body: {
    type: string;
    action: string;
    data: unknown;
  };
}

export interface PGateway_Action {
  (params: PGateway_ActionInput): string;
}

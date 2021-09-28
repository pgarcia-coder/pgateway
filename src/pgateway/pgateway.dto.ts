export class ProcessActionParams {
  body: {
    type: string;
    action: string;
    data: unknown;
  };
}

export interface ProcessAction {
  (params: ProcessActionParams): string;
}

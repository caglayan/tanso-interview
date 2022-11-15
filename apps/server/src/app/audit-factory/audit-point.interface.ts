export interface AuditPoint {
  updatedBy: string;

  changedDateTime: string;

  changeMethod: 'CREATE' | 'UPDATE';

  emissionGasName?: string;

  quantity?: number;

  unit?: string;
}

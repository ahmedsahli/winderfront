import { User } from '../../../modules/auth/user';
import { ResponseData } from './ResponseData';

export interface Reclamation {
  idRec: number;
  contenuRec: string;
  type: string;
  sendingDate: Date;
  etat: string;
  responses: any[];
}

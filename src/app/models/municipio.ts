import { Provincia } from './provincia';
export interface Municipio {
  id: number;
  nome: string;
  provincia: Provincia;
}

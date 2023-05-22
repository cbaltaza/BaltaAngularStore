import { Headersscale } from "./headers.model";

export interface Product {
  method: string;
  path: string;
  body: string;
  headers: string;
  uuid: string;
  bodySha1: string;
  bodyLength: string;

}

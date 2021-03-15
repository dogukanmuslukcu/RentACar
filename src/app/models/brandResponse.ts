import { Brand } from "./brand";
import { responseModel } from "./responseModel";


export interface brandResponse extends responseModel
{
    data:Brand[],
  
}
import { Rental } from "./rental";
import { responseModel } from "./responseModel";

export interface rentalResponse extends responseModel
{
    data:Rental[],
   
}
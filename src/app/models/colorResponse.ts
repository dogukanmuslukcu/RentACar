import { Color } from "./color";
import { responseModel } from "./responseModel";

export interface colorResponse extends responseModel
{
    data:Color[],
   
}
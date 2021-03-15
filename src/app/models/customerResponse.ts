import { Customer } from "./customer";
import { responseModel } from "./responseModel";

export interface customerResponse extends responseModel
{
    data:Customer[],

}
import { CarDto } from "./carDto";
import { responseModel } from "./responseModel";

export interface carDtoResponseModel extends responseModel
{
    data:CarDto[],
    
}
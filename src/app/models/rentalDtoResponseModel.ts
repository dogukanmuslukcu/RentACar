import { RentalDto } from "./rentalDto";
import { responseModel } from "./responseModel";

export interface rentalDtoResponseModel extends responseModel
{
    data :RentalDto[]
    
}
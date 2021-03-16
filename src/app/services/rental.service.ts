import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalDtoResponseModel } from '../models/rentalDtoResponseModel';
import { rentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44309/api/customers/getAll";
  apiUrl2 = "https://localhost:44309/api/rentals/getrentaldetails";

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<rentalResponseModel> {
    return this.httpClient.get<rentalResponseModel>(this.apiUrl)
  }
  getRentalDtos():Observable<rentalDtoResponseModel>{
    return this.httpClient.get<rentalDtoResponseModel>(this.apiUrl2)
  }
}

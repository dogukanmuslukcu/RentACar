import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44309/api/customers/getAll";
  apiUrl2 = "https://localhost:44309/api/rentals/getrentaldetails";

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>> {
    return this.httpClient.get<listResponseModel<Rental>>(this.apiUrl)
  }
  getRentalDtos():Observable<listResponseModel<RentalDto>>{
    return this.httpClient.get<listResponseModel<RentalDto>>(this.apiUrl2)
  }
}

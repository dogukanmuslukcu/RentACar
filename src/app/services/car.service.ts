import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carDtoResponseModel } from '../models/carDtoResponseModel';
import { carResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  api2Url = "https://localhost:44309/api/cars/getAll";
  apiUrl = "https://localhost:44309/api/cars/getCarDetails";
  constructor(private httpClient: HttpClient) { }

  getDtoCars():Observable<carDtoResponseModel> {
    return this.httpClient.get<carDtoResponseModel>(this.apiUrl)
  }
 
  getCars():Observable<carResponseModel> {
    return this.httpClient.get<carResponseModel>(this.api2Url)
  }
}

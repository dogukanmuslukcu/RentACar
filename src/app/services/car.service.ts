import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { carImage } from '../models/carImage';
import { listResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl = "https://localhost:44309/api/";
  constructor(private httpClient: HttpClient) { }

  getDtoCars():Observable<listResponseModel<CarDto>> {
    let newPath =this.apiUrl+"cars/getCarDetails"
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
 
  getCars():Observable<listResponseModel<Car>> {
    let newPath =this.apiUrl+"cars/getAll"
    return this.httpClient.get<listResponseModel<Car>>(newPath)
  }
  getDtoCarsByColor(colorId:number):Observable<listResponseModel<CarDto>> {
    let newPath =this.apiUrl+"cars/getallcolorId?colorId="+colorId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getDtoCarsByBrand(brandId:number):Observable<listResponseModel<CarDto>> {
    let newPath =this.apiUrl+"cars/getallbrandId?brandId="+brandId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  
  
}

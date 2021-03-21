import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carImage } from '../models/carImage';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44309/api/carImages/";
  constructor(private httpClient: HttpClient) { }
  
 
  getImagesById(carId:number):Observable<listResponseModel<carImage>>{
    let newPath =this.apiUrl+"getimagesbycarId?carId="+carId
    return this.httpClient.get<listResponseModel<carImage>>(this.apiUrl)
  }
}

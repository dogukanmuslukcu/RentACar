import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { carResponseModel } from 'src/app/models/carResponse';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  apiUrl = "https://localhost:44309/api/cars/getall";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.httpClient.get<carResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.cars=response.data
       });
  }
}

import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  carDtos:CarDto[]=[];
  dataLoaded = false;
  constructor(private carDtoService: CarService) { }

  ngOnInit(): void {
    this.getDtoCars();
  }

  getDtoCars() {
    this.carDtoService.getDtoCars().subscribe(response => {
      this.carDtos = response.data
      this.dataLoaded = true;
    })
  }
}

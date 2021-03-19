import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private carDtoService: CarService,
     private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     if(params["colorId"]){
       this.getDtoCarsByColor(params["colorId"])
     }else{
this.getDtoCars()
     }
    })
  }

  getDtoCars() {
    this.carDtoService.getDtoCars().subscribe(response => {
      this.carDtos = response.data
      this.dataLoaded = true;
    })
  }
  getDtoCarsByColor(colorId:number) {
    this.carDtoService.getDtoCarsByColor(colorId).subscribe(response => {
      this.carDtos = response.data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { carImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  carDtos:CarDto[]=[];
  carImages:carImage[]=[];
  dataLoaded = false;
  constructor(private carDtoService: CarService, private carImageService :CarImageService,
     private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     
      if(params["colorId"]){
        this.getDtoCarsByColor(params["colorId"])
      }else if(params["brandId"]){
 this.getDtoCarsByBrand(params["brandId"])
      }else if(params["carId"]){
        this.getImagesById(params["carId"])
      }
      else{
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
  getDtoCarsByBrand(brandId:number) {
    this.carDtoService.getDtoCarsByBrand(brandId).subscribe(response => {
      this.carDtos = response.data;
    })
  }
  getImagesById(carId:number){
    this.carImageService.getImagesById(carId).subscribe(response=>{
      this.carImages=response.data;
      
    })
  }
  
}

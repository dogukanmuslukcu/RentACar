import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages: carImage[] = [];
  constructor(private carImageService: CarImageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]){
        this.getImagesById(params["carId"]);
      }

    })
  }

  getImagesById(carId:number) {
    this.carImageService.getImagesById(carId).subscribe(response => {
      this.carImages = response.data
    })
  }

}

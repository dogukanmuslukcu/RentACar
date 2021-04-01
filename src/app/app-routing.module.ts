import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CarImageComponent } from './components/car-image/car-image.component';

const routes: Routes =
 [
   {path:"",pathMatch:"full" , component:CarDtoComponent},
   {path:"carDtos",component:CarDtoComponent},
   {path:"carDtos/color/:colorId",component:CarDtoComponent},
   {path :"carDtos/brand/:brandId",component:CarDtoComponent},
   {path :"carDtos/car-dto/:carId",component:CarDtoComponent},
   {path:"carDtos/carImages/:carId", component:CarImageComponent}
   
   
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

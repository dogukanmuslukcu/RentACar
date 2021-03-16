import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-dto',
  templateUrl: './rental-dto.component.html',
  styleUrls: ['./rental-dto.component.css']
})
export class RentalDtoComponent implements OnInit {

  rentalDtos:RentalDto[]=[];
  constructor(private rentalDtoService: RentalService) { }

  ngOnInit(): void {
    this.getRentalDtos();
  }

  getRentalDtos() {
    this.rentalDtoService.getRentalDtos().subscribe(response => {
      this.rentalDtos = response.data
    })
  }
}

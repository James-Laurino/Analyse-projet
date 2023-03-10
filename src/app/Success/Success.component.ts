import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";


@Component({
  selector:"success-app",
  templateUrl:"Success.component.html"
})
export class SuccessComponent implements OnInit
{
  ngOnInit(): void
  {
    Swal.fire({
      title: 'Greet Jod',
      text: 'Welcome to RecyZone',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recycling_symbol2.svg/1200px-Recycling_symbol2.svg.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

}

import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector:"navbar-app",
  templateUrl:"navbar.component.html"

})
export class NavbarComponent implements OnInit
{
  lc:boolean = false
  ngOnInit(): void
  {
    this.lc = localStorage.getItem('Name') == 'Billy'
  }

}

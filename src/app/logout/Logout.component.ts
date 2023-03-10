import { Component, OnInit } from "@angular/core";

@Component({
  selector:'logout-app',
  templateUrl:'Logout.component.html'
})
export class LogoutComponent implements OnInit
{
  ngOnInit(): void
  {
    localStorage.removeItem('Name');
  }

}

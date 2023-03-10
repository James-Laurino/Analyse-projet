import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector:'login-app',
  templateUrl:'Login.component.html'
})
export class LoginComponent implements OnInit
{

  constructor(private route: ActivatedRoute, private router: Router  )
  {}


  ngOnInit(): void {
  }
  getAccess()
  {
    localStorage.setItem('Name', 'Billy');
    this.router.navigate(['']);
  }
}

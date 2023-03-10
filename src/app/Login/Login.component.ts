import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector:'login-app',
  templateUrl:'Login.component.html'
})
export class LoginComponent implements OnInit
{

  email:any = ''

  constructor(private route: ActivatedRoute, private router: Router  )
  {}


  ngOnInit(): void {
  }

  onKey(event:any)
  {
    this.email = event.target.value;
  }

  getAccess()
  {
    if(this.email == 'admin@admin.be')
    {
      localStorage.setItem('Name', 'Admin');
      this.router.navigate(['']);
    }
    else
    {
      localStorage.setItem('Name', 'Billy');
      this.router.navigate(['']);
    }

  }
}

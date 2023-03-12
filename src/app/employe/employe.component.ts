import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Employee } from "../models/Employee";

@Component({
  selector:"employee-app",
  templateUrl:'employe.component.html'
})
export class EmployeComponent implements OnInit
{

  employees:Employee[] = [];
  fnameEmployee:string =''
  lnameEmployee:string =''
  statutEmployee:string =''
  ngOnInit(): void
  {
    this.employees.push(new Employee(1,"Otto", "Man", "Operator",false))
    this.employees.push(new Employee(2,"Aude", "Javel", "Sales",false))
    this.employees.push(new Employee(3,"Paul", "Emploi", "Marketing",false))

  }

  fName(event:any)
  {
    this.fnameEmployee = event.target.value;
  }

  LName(event:any)
  {
    this.lnameEmployee = event.target.value;
  }

  Statut(event:any)
  {
    this.statutEmployee = event.target.value;
  }

  editChangement(event:any)
  {
    this.employees.forEach((e,i) =>
    {
      if(e.id == event)
      {
        e.firstname = this.fnameEmployee;
        e.lastname = this.lnameEmployee;
        e.status = this.statutEmployee;
        e.isUpdate = false;
      }
    })
  }

  updateUser(event:any)
  {
    this.employees.forEach((e,i) =>
    {
      if(e.id == event)
      {
        e.isUpdate = true
      }
    })
  }

  del(event:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) =>
    {
      if (result.isConfirmed)
      {
        Swal.fire(
          'Deleted!',
          'Your Employee has been deleted.',
          'success'
        )
        this.employees.forEach((element,index)=>
        {
            if(element.id==event) this.employees.splice(index,1);
        });
      }
    })
  }
}

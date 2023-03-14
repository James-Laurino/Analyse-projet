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
  isAdd:boolean = false;

  mailEmployeAdd:string = ''
  passEmployeAdd:string = ''
  firstNameEmployeAdd:string = ''
  LastNameEmployeAdd:string = ''
  statutEmployeAdd:string = ''

  mailAdd(event:any)
  {
    this.mailEmployeAdd =event.target.value
  }

  passAdd(event:any)
  {
    this.passEmployeAdd =event.target.value
  }

  firstNameAdd(event:any)
  {
    this.firstNameEmployeAdd =event.target.value
  }

  lastNameAdd(event:any)
  {
    this.LastNameEmployeAdd =event.target.value
  }

  statutAdd(event:any)
  {
    this.statutEmployeAdd =event.target.value
  }

  addNewOne()
  {
    this.isAdd = true
  }

  isAddedTo()
  {
    let id:number|undefined = 0
    this.employees.forEach((e,i) =>
    {
      id =e.id
    })

    id = id + 1

    this.employees.push(new Employee(id,this.firstNameEmployeAdd, this.LastNameEmployeAdd, this.statutEmployeAdd,false))
    this.isAdd = false;
  }

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

  back(event:any)
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

  editChangement(event:any)
  {

    this.employees.forEach((e,i) =>
    {
      if(e.id == event)
      {
        if(this.fnameEmployee == "")
        {
          e.isUpdate = false;
        }
        else
        {
          e.firstname = this.fnameEmployee;
          e.lastname = this.lnameEmployee;
          e.status = this.statutEmployee;
          e.isUpdate = false;
        }
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

import { Component } from "@angular/core";
import Swal from "sweetalert2";
import { Client } from "../models/Client";

@Component({
  selector:'client-app',
  templateUrl:'client.component.html'
})
export class ClientComponent
{
  clients:Client[] = [];
  fnameEmployee:string =''
  lnameEmployee:string =''
  villeEmployee:string =''

  ngOnInit(): void
  {
    this.clients.push(new Client(1,"Otto", "Man", "Louvain-la-neuve",false))
    this.clients.push(new Client(2,"Aude", "Javel", "Genappe",false))
    this.clients.push(new Client(3,"Paul", "Emploi", "Genval",false))
  }

  fName(event:any)
  {
    this.fnameEmployee = event.target.value;
  }

  LName(event:any)
  {
    this.lnameEmployee = event.target.value;
  }

  CVille(event:any)
  {
    this.villeEmployee = event.target.value;
  }

  editChangement(event:any)
  {
    this.clients.forEach((e,i) =>
    {
      if(e.id == event)
      {
        e.firstname = this.fnameEmployee;
        e.lastname = this.lnameEmployee;
        e.ville = this.villeEmployee;
        e.isUpdate = false;
      }
    })
  }

  updateUser(event:any)
  {
    this.clients.forEach((e,i) =>
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
        this.clients.forEach((element,index)=>
        {
            if(element.id==event) this.clients.splice(index,1);
        });
      }
    })
  }
}

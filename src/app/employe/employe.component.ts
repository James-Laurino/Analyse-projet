import { Component } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector:"employee-app",
  templateUrl:'employe.component.html'
})
export class EmployeComponent
{
  delUser:number[] = []
  updateUser:boolean = false

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

        this.delUser.push(event)
      }
    })
  }
}

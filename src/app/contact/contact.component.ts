import { Component } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector:"contact-app",
  templateUrl:'contact.component.html'
})
export class ContactComponent
{


  sendEmail()
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your email has been send successfully',
      showConfirmButton: false,
      timer: 3000
    })


  }
}

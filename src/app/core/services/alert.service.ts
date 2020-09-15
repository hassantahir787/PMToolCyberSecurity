import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public showSuccessDialog(title: string, text: string, okButtonText: string = "OK", cancelButtonText: string = ""){
    
  }

  public showConfirmDialog(title: string, text: string, icon: SweetAlertIcon = null, 
    okButtonText: string = "OK", cancelButtonText: string = "Cancel") {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: okButtonText,
      cancelButtonText: cancelButtonText
    }).then((result) => {
      if (result.value) {
        return result.value;
      }
    })
  }

  public successMessage(title, message) {
    Swal.fire(
      title,
      message,
      'success'
    )
  }

  public errorMessage(message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
      
    })
  }
}

import { FormControl, FormGroup } from "@angular/forms"; 
declare var $: any;

export default class ValidateForm {
    static validateAllFormFileds(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFileds(control);
            }
        })
    }
 
     
    static ShowMessage(responseData){
        
        let _message='',_type='danger';
        if(responseData)
        {
            _message=responseData.message;
            _type=responseData.responseType='error'?'danger':responseData.responseType
        }  
        debugger
        $.notify({
            icon: "notifications",
            message: _message
  
        },
        {
            type: _type,
            timer: 2000,
            placement: {
                from: 'top',
                align: 'right',
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
              '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
              '<i class="material-icons" data-notify="icon">notifications</i> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }
}
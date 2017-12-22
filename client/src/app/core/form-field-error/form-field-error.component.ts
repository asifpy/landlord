import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'form-field-error',
  templateUrl: './form-field-error.component.html',
})
export class FormFieldErrorComponent {

	errorMessage;

  @Input() field: FormControl;
  constructor() {
  	this.errorMessage = this.getFieldError()
  }

  getFieldError() {
  	for (let error in this.field.errors) {
      if (this.field.errors.hasOwnProperty(error) && this.field.touched) {
        return ValidationService.getValidationErrorMessage(error);
      }
    }
    return null;
  }

}

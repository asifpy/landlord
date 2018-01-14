import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class HandleErrorService {

    handleError(error: any) {
        if (error instanceof HttpErrorResponse) {
            console.error(`Backend returned code ${error.status}, error was: ${error.message}`);
        } else if (error instanceof TypeError) {
            console.error('There was a Type error.', error.message);
        } else if (error instanceof Error) {
            console.error('There was a general error.', error.message);
        } else {
            console.error('Nobody threw an error but something happened!', error);
        }

        return Observable.throw(error);
    }
}

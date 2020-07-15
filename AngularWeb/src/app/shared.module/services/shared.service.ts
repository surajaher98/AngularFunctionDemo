import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class SharedService {

    constructor(@Inject(ToastrService) private toasterService: ToastrService) {
    }

    showErrorMessage(message: string) {
        this.toasterService.error(message);
    }
    showSuccessMessage(message: string) {
        this.toasterService.success(message);
    }

}

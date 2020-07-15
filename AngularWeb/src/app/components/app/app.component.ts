import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { LoaderService } from '@app/core.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @BlockUI() blockUI: NgBlockUI;
  title = 'app';

  constructor(private loaderService: LoaderService) {
    this.loaderService.displayLoader.subscribe((counter:  number)  =>  {
      if  (counter  !==  0) {
        this.blockUI.start();
      }  else  {
        this.blockUI.stop();
      }
    });
  }
}

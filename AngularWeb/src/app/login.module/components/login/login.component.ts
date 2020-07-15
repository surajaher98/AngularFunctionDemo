import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.sharedService.showSuccessMessage('Toaster and bootstrap Works');
  }
}


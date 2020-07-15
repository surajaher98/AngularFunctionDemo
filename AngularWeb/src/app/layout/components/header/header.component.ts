import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) {

  }

  ngOnInit() {

  }

}

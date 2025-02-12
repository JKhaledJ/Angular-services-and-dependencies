import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  account : {name: string, status: string}[]=[];

  constructor(private accountService: AccountsService){}

  ngOnInit(){
    this.account = this.accountService.accounts;
  }
}

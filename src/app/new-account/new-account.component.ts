import { Component} from '@angular/core';
import {LoggingService} from '../logging.service'
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  constructor(private logService: LoggingService, private accService: AccountsService){
    this.accService.statusUpdated.subscribe(
      (status:string)=>alert("The new status is: "+status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName,accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }
}

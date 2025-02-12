import { Component, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private logService: LoggingService, private accService: AccountsService){}


  onSetTo(status: string) {
    this.accService.updateStatus(this.id,status);
    // this.logService.logStatusChange(status);
    this.accService.statusUpdated.emit(status);
  }
}

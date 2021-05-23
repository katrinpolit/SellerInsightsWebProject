import {Component} from '@angular/core';
import {AccountManagerAPIService} from "./services/rest/account-manager/account-manager-api.service";
import {AccountManagerStatistics} from "./models/AccountManagerStatistics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  accountManagerInfo: AccountManagerStatistics;

  constructor(
    public accountManagerAPI: AccountManagerAPIService
  ) {
  }

  onSearchQueryChanged($event: string) {
    this.accountManagerAPI.getAccountManagerDataByName($event)
      .subscribe((response: AccountManagerStatistics) => {
        this.accountManagerInfo = response;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { User } from './../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean;
  // currentUser$: Observable<User>;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  logout() {
    this.accountService.logout();
  }
}

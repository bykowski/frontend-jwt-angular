import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-jwt';
  email = '';
  password = '';
  data: Data[];

  ngOnInit() {
  }

  constructor(private appService: AppService) {
    this.data = [];
  }

  login() {
    console.log('email' + this.email);

    let payload = {email: this.email, password: this.password};

    this.appService.loginApi(payload).subscribe((res: any) => {
      console.log(res);
      this.getData(res.accessToken);
    })
  }

  getData(token: string)
  {
    this.appService.getData(token).subscribe((res: any) => {
      this.data = res;
    })
  }

}

export interface Data {
  title: string;
  author: string;
}

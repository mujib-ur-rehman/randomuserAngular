import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { usermodel } from '../usermodel';
import { AsyncSubject, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  users: usermodel[] = [];
  user: any = 0;
  subject = new ReplaySubject(3);
  getuser() {
    this.subject.next(
      this.service.getuser().subscribe(res => {
        this.user = res;
        console.warn(this.user);
        this.users.push(this.user);

        console.warn(this.users);
      })
    );
    this.subject.next(
      this.service.getuser().subscribe(res => {
        this.user = res;
        console.warn(this.user);
        this.users.push(this.user);

        console.warn(this.users);
      })
    );
    this.subject.subscribe(user => console.warn(this.user));

    this.subject.next(
      this.service.getuser().subscribe(res => {
        this.user = res;
        console.warn(this.user);
        this.users.push(this.user);

        console.warn(this.users);
      })
    );

    this.subject.complete();
  }

  ngOnInit(): void {}
}

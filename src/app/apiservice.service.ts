import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, AsyncSubject, of, empty } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  url: any = 'https://randomuser.me/api';

  getuser(): Observable<Object> {
    return this.http.get<any>(this.url).pipe(
      filter(
        user =>
          user.results[0].dob.age >= 40 && user.results[0].id.value != null
      ),
      map(user => user.results[0])
    );
    // console.warn(this.daddyo);
    // return this.daddyo;
  }
}

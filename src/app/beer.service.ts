import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beer';

@Injectable()
export class BeerService {

   private serviceUrl = 'http://localhost:8080/mybeer/randombeer?id=';

   constructor(private http: HttpClient) { }

   getBeer(id): Observable<Beer> {
      return this.http.get<Beer>(this.serviceUrl+id);
   }

}

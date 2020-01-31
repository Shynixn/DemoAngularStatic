import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CounterService {
  constructor(private http: HttpClient) {
  }

  getAddAmount(header : string): Observable<number> {
    return Observable.create(observer => {
      observer.next(3);
      observer.complete();
    });
  }
}

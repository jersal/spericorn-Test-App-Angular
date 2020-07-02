import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  create(api,data){
    return this.http.post<any>(api,data)
}

query(api){
  return this.http.get<any>(api)

}
}

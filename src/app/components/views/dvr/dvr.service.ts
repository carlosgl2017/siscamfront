import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dvr } from './dvr';

@Injectable({
  providedIn: 'root'
})
export class DvrService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Dvr[]> {
    const url = `${this.baseUrl}/dvr/sel`;
    return this.http.get<Dvr[]>(url);
  }

  create(dvr: Dvr): Observable<Dvr> {
    const url = `${this.baseUrl}/cat/add`;
    return this.http.post<Dvr>(url, dvr);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }

  findById(iddvr: Number): Observable<Dvr> {
    const url = `${this.baseUrl}/dvr/sel/${iddvr}`;
    return this.http.get<Dvr>(url);
  }

  delete(iddvr: Number): Observable<void> {
    const url = `${this.baseUrl}/dvr/del/${iddvr}`;
    return this.http.delete<void>(url);
  }
  
  update(dvr: Dvr,iddvr:number): Observable<void> {
    const url = `${this.baseUrl}/dvr/upd/${iddvr}`;
    return this.http.put<void>(url, dvr);
  }
}

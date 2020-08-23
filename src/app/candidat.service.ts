import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  baseurl = 'http://localhost:8000/';

  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllCandidats(): Observable<any> {
    return this.http.get(this.baseurl + 'candidates/',
      {headers: this.httpHeaders});
  }
  getOneCandidat(id): Observable<any> {
    return this.http.get(this.baseurl + 'candidates/' + id + '/',
      {headers: this.httpHeaders});
  }
  UpdateCand(candidat): Observable<any> {
    const body = {nom: candidat.nom, prenom: candidat.prenom, email: candidat.email,
      date_naiss: candidat.date_naiss, tel: candidat.tel, disp: candidat.disp, exp: candidat.exp,
      msg: candidat.msg, cand_status: candidat.cand_status,
      email_status: candidat.email_status };
    return this.http.put(this.baseurl + 'candidates/' + candidat.id + '/',
      body, {headers: this.httpHeaders});
  }
  CreateCand(candidat): Observable<any> {
    const body = {nom: candidat.nom, prenom: candidat.prenom, email: candidat.email,
      date_naiss: candidat.date_naiss, tel: candidat.tel, disp: candidat.disp, exp: candidat.exp,
      msg: candidat.msg, cand_status: 'New Candidate' };
    return this.http.post(this.baseurl + 'candidates/'  , body
      , {headers: this.httpHeaders});
  }

  CreateCandf(candidat): Observable<any> {
    const body = {nom: candidat.nom, prenom: candidat.prenom, email: candidat.email,
      date_naiss: candidat.date_naiss, tel: candidat.tel, disp: candidat.disp, exp: candidat.exp,
      msg: candidat.msg, cv: candidat.cv, cand_status: candidat.cand_status };
    return this.http.post(this.baseurl + 'candidates/'  , body
      , {headers: this.httpHeaders});
  }

  DeleteCand(id): Observable<any> {

    return this.http.delete(this.baseurl + 'candidates/' + id + '/',
      {headers: this.httpHeaders});
  }

}

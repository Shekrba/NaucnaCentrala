import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = "http://localhost:8080/webshop";

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  startProcess(): Observable<any>{
    return this.http.get(`${BASE_URL}/registration`);
  }

  startNewPaperProcess(username): Observable<any>{
    return this.http.get(`${BASE_URL}/newPaper/${username}`);
  }

  getCorrectionData(processId): Observable<any>{
    return this.http.get(`${BASE_URL}/correction/${processId}`);
  }

  getUrednikeRecenzente(processId): Observable<any>{
    return this.http.get(`${BASE_URL}/uredniciRecenzenti/${processId}`);
  }

  getOblasti(): Observable<any>{
    return this.http.get(`${BASE_URL}/sciencefields`);
  }

  getPlacanja(): Observable<any>{
    return this.http.get(`${BASE_URL}/payments`);
  }

  submitRegistration(formModel,taskId): Observable<any>{
    return this.http.post(`${BASE_URL}/registration/${taskId}`, formModel,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      })
    });
  }

  submitNewPaper(formModel,processId): Observable<any>{
    return this.http.post(`${BASE_URL}/newPaper/${processId}`, formModel,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      })
    });
  }

  submitUredniciRecenzenti(body,processId): Observable<any>{
    return this.http.post(`${BASE_URL}/newPaper/uredniciRecenzenti/${processId}`, body,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       })
    });
  }

  aktivacijaCaspisa(body): Observable<any>{
    return this.http.post(`${BASE_URL}/potvrdaCasopisa`,body,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getValidation(processId): Observable<any>{
    return this.http.get(`${BASE_URL}/registration/validation/${processId}`);
  }

  activateAccount(processId): Observable<any>{
    return this.http.post(`${BASE_URL}/registration/confirmation/${processId}`,null,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      })
    });
  }

  potvrdaRecenzenta(dto): Observable<any>{
    return this.http.post(`${BASE_URL}/potvrdaRecenzenta`,dto,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getNumberOfTasks(username): Observable<any>{
    return this.http.get(`${BASE_URL}/numberOfTasks/${username}`);
  }

  getTasks(username): Observable<any>{
    return this.http.get(`${BASE_URL}/tasks/${username}`);
  }

  getMyPapers(username): Observable<any>{
    return this.http.get(`${BASE_URL}/myPapers/${username}`);
  }

  getAllPapers(): Observable<any>{
    return this.http.get(`${BASE_URL}/papers`);
  }
}

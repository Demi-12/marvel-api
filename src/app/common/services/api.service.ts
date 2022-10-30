import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }


  postWithOptions(url: string, data: any, options: any = null): Observable<any> {
    return this.http.post(url, data, options);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }

  patch(url: string, data: any): Observable<any> {
    return this.http.patch(url, data);
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  getBlob(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'blob' });
  }

  delete(url: string, data: any): Observable<any> {
    return this.http.delete(url, data);
  }

  upload(url: string, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file)
    return this.http.post<any>(url, formData, { reportProgress: true, observe: 'events' });
  }

}

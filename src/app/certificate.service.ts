import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private baseUrl = 'http://localhost:8080/api/certificates'; // Replace with your Spring Boot API URL
  submittedCertificates: string[] = [];
  constructor(private http: HttpClient) { }

  getCertificates(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  submitCertificate(certificate: any): void {
    this.submittedCertificates.push(certificate);
  }
  saveCertificate(certificate: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, certificate);
  }
}

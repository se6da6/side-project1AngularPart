import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificateService } from 'src/app/certificate.service';
import { Certificate } from './certificate.model';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  certificateForm: FormGroup;
  certificates: Certificate[] = [];
  certificateId: number = 0;
  selectedCertificate: Certificate | null = null;
  private baseUrl = 'http://localhost:8080/certificates';
  showCertificatesTable: boolean = false;

  constructor(private formBuilder: FormBuilder, 
              private certificateService: CertificateService, 
              private http: HttpClient) {
    this.certificateForm = this.formBuilder.group({
      certificateName: ['', Validators.required],
      issuingAuthority: ['', Validators.required],
      issueDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllCertificates();
  }
  
  saveCertificate(): void {
    this.http.post(`${this.baseUrl}/save`, this.certificateForm.value).subscribe({
      next: () => {
        console.log('Form submitted successfully');
        this.certificateForm.reset();
        this.getAllCertificates();
      },
      error: (error) => {
        console.error('Form submission failed', error);
      }
    });
  }
  
  
  

  getAllCertificates(): void {
    this.http.get<Certificate[]>(this.baseUrl).subscribe(certificates => {
      this.certificates = certificates;
    });
  }
  
  getCertificateById(): void {
    this.http.get<Certificate>(`${this.baseUrl}/${this.certificateId}`).subscribe(certificate => {
      this.selectedCertificate = certificate;
    });
  }
  
    
  submitForm() {
    if (this.certificateForm.valid) {
      this.saveCertificate();
      this.certificateForm.reset();
    } else {
      console.error('Invalid form');
    }
  }

  toggleCertificatesTable(): void {
    this.showCertificatesTable = !this.showCertificatesTable;
    if (this.showCertificatesTable) {
      this.getAllCertificates();
    }
  }
}

export class Certificate {
    id: number;
    certificateName: string;
    issuingAuthority: string;
    issueDate: Date;
    
    constructor(id: number, certificateName: string, issuingAuthority: string, issueDate: Date) {
      this.id = id;
      this.certificateName = certificateName;
      this.issuingAuthority = issuingAuthority;
      this.issueDate = issueDate;
    }
  }
  
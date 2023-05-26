import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'report-generation';
  constructor(private http: HttpClient) {}

  downloadReport() {
    const url = 'http://localhost:8080/projects/fullReportExport';
    this.http.get(url, { responseType: 'blob' }).subscribe((response: Blob) => {
      const fileName = 'projectsFullReport.xlsx';
      saveAs(response, fileName);
    });
  }
  
  
  

  // downloadReport(): void {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });

  //   this.http
  //     .get('http://localhost:8080/projects/fullReportExport', {
  //       headers,
  //       responseType: 'blob',
  //     })
  //     .subscribe((response: Blob) => {
  //       const filename = 'projectsFullReport.xlsx';
  //       saveAs(response, filename);
  //     });
  // }
  
  }


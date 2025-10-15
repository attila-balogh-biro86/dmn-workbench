import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DmnUploadService {
  private baseUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) {}

  async upload(xml: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml' });
    return await lastValueFrom(
      this.http.post<any>(`${this.baseUrl}/evaluate-model`, xml, { headers })
    );
  }
}
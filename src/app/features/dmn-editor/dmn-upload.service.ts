import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DmnUploadService {
  private baseUrl = '/api/dmn';

  constructor(private http: HttpClient) {}

  async upload(xml: string, filename: string) {
    const fd = new FormData();
    fd.append('file', new Blob([xml], { type: 'application/xml' }), filename);
    return this.http.post(`${this.baseUrl}/upload`, fd).toPromise();
  }
}

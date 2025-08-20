import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get(environment.urlApi+"providers/");
  }


  saveProvider(provider:any){
    return this.http.post(environment.urlApi+"providers/",provider);
  }

  deleteProvider(id:any){
     return this.http.delete(environment.urlApi+"providers/"+id);
  }

  getProviderById(id:any){
     return this.http.get(environment.urlApi+"providers/"+id);
  }

   updateProvider(provider:any){
     return this.http.put(environment.urlApi+"providers/",provider);
  }
}

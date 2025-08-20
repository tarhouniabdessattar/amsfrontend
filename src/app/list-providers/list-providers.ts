import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Provider } from '../../models';
import { ProviderService } from '../services/provider-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {
  public urlUpload = environment.urlUploadImage;
  listProviders = new BehaviorSubject<Provider[] | null>(null);
  constructor(private providerService: ProviderService, private router:Router) { // injection de la dépendance:le service Users
  }
  ngOnInit(): void {
    this.loadProviders();
    
  }

  deleteProvider(id:any){
    this.providerService.deleteProvider(id).subscribe({
      next: (data: any) => {
      this.loadProviders();
      },
      error: (err) => {
        console.error('Problème de suppression du provider', err);

      }
    });
  }

  updateProvider(id:any){
    this.router.navigate(['updateProvider', id]);
  }

  loadProviders(){
    this.providerService.getProviders().subscribe({
      next: (data: any) => {
        this.listProviders.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération providers', err);

      }
    });
  }
}

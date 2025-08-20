import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})
export class AddProvider implements OnInit {
selectedFile!: File;
  constructor(private providerService: ProviderService, private router:Router) { // injection de la dépendance:le service Users
  }

  ngOnInit(): void {
   
  }
public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }
  /*saveProvider(provider: any) {
    this.providerService.saveProvider(provider).subscribe(
      {
      next: (data: any) => {
        this.router.navigate(['providers']);

      },
      error: (err) => {
        console.error('Erreur ajout provider', err);

      }
    });
  }*/
 saveProvider(myform:any) {
      const provider = new FormData();
      provider.append('imageFile', this.selectedFile,this.selectedFile.name);
      //provider.append('imageName',this.selectedFile.name);
      provider.append('name', myform.name);
      provider.append('email', myform.email);
      provider.append('address', myform.address);
  
      this.providerService.saveProvider(provider).subscribe(
        (response) =>{
          console.log(response);
          this.router.navigate(['providers']);
        }, error => {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      );
  
    }

}

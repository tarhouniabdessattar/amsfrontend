import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  logo:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcOuz17dyeXVHeUdUgaSRcvgDb7hO06tGjw&s";
  formation:string="FullStack Spring Angular & Devops";

  nom:string  ="Mohamed Amine mezghich";
  email:string ="amine.mezghich@gmail.com";

  noms:string[]=["aMINE","taHa","abdeSAtar","raniA","iNes"]

  displaySuccess()
  {
    alert("Tu as cliquer sur btn success")
  }

   displayDanger()
  {
    alert("Tu as cliquer sur btn danger")
  }
}

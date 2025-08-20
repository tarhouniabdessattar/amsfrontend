import { Component, OnInit } from '@angular/core';
import { Provider } from '../../models';
import { Users } from '../services/users';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
/*
  providers:Provider[]=[
    {
      id:1, name:"Samsung",email:"samsung@gmail.com",address:"Koré"},

    { id:2, name:"HP",email:"hp@gmail.com",address:"USA"},

    { id:3, name:"Toshiba",email:"toshiba@gmail.com",address:"Japon"}
  ];
*/
  listUsers= new BehaviorSubject<any | null>(null);;

  constructor(private userService:Users){ // injection de la dépendance:le service Users
   //console.log("constructor...")
  }
  ngOnInit(): void {
    //console.log("ngOnInit ...")
    this.userService.getUsers().subscribe({
      next: (data:any) => {
        console.log(data)
        this.listUsers.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération users', err);

      }
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ListProviders } from './list-providers/list-providers';
import { AddProvider } from './add-provider/add-provider';
import { UpdateProvider } from './update-provider/update-provider';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { AuthGuard } from './services/auth-guard';
import { Signup } from './signup/signup';

const routes: Routes = [
  {
    path: "users",
    component: Home,
    canActivate: [AuthGuard]
  },
  {
    path: "providers",
    component: ListProviders,
    canActivate: [AuthGuard]
  },
  {
    path: "addProvider",
    component: AddProvider,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: "updateProvider/:id",
    component: UpdateProvider,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: Login
  },
  { 
    path: 'logout', 
    component: Logout,
    canActivate: [AuthGuard] 
  },
  {
    path: 'signup',
    component: Signup
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase-pipe';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ListProviders } from './list-providers/list-providers';
import { Navbar } from './navbar/navbar';
import { AddProvider } from './add-provider/add-provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProvider } from './update-provider/update-provider';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { TokenInterceptor } from './services/token-interceptor';
import { Signup } from './signup/signup';

@NgModule({
  declarations: [
    App,
    Home,
    AddIngPipe,
    FirstLetterUppercasePipe,
    ListProviders,
    Navbar,
    AddProvider,
    UpdateProvider,
    Login,
    Logout,
    Signup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, // Remplacez par votre interceptor personnalisé
      multi: true
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }

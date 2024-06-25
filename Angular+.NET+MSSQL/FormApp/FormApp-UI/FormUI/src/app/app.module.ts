import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserRoutingModule } from './user/user-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { NgxMaskDirective } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    HttpClientModule,
    NgxMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

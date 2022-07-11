import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [NgbdModalBasic],
  exports: [NgbdModalBasic],
  bootstrap: [NgbdModalBasic],
  providers: [],
  // providers: [BsModalService]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { ListenerComponent } from './listener/listener.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ListenerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }

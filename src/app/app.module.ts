import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { BibliothequeService } from './bibliotheque.service'
import { MatIconModule, MatListModule, MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule} from "@angular/forms"; 

@NgModule({
  declarations: [
    AppComponent,
    BibliothequeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatCardModule, 
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [BibliothequeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

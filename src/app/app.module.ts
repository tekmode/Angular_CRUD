import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowmapComponent } from './showmap/showmap.component';
import { AddempComponent } from './addemp/addemp.component';
import { DelempComponent } from './delemp/delemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ShowempComponent } from './showemp/showemp.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowmapComponent,
    AddempComponent,
    DelempComponent,
    EditempComponent,
    ShowempComponent,
    HomeComponent,
    ConceptsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { GeneralSelectionComponent } from './components/general-selection/general-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    VehicleComponent,
    GeneralSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotFoundComponent } from './notfound/notfound.component';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ScheduleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material Design Components
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatDatepickerModule,
    MatStepperModule,
    MatRadioModule,

    RouterModule.forRoot([
      { path: "", component: HomeComponent },

      // Insert additional directories below this line
      { path: "services", component: ServicesComponent },
      { path: "pricing", component: PricingComponent },
      { path: "schedule", component: ScheduleComponent },
      // Insert additional directories above this line

      { path: "**", component: NotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

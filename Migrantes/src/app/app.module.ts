import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

//HttpClient
import { HttpClientModule } from "@angular/common/http";

//Forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes'

//Material Modules
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatCardModule , } from '@angular/material';
import {MatToolbarModule} from '@angular/material'
import {MatTabsModule, matTabsAnimations} from '@angular/material/tabs'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSliderModule} from '@angular/material/slider';

//flex layout
import { FlexLayoutModule } from "@angular/flex-layout";

import {environment} from "../environments/environment";
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ProfileComponent } from './components/profile/profile.component';



export const config = environment.firebaseConfig;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OrganizationsComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    FlexLayoutModule,
    MatSliderModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

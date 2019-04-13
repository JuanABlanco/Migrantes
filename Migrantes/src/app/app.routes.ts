import { Routes, RouterModule } from '@angular/router';

// Componentes:
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { EmbarcaderoComponent } from './components/embarcadero/embarcadero.component';
import { ContactComponent } from './components/contact/contact.component';


const ROUTES: Routes = [

        {path: 'home', component: HomeComponent},
        {path: 'us', component: UsComponent},
        {path: 'embarcadero', component: EmbarcaderoComponent},
        {path: 'contact', component: ContactComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
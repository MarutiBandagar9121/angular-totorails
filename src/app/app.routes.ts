import { Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: SignalsComponent },
    {path: 'home',component:HomeComponent}
];

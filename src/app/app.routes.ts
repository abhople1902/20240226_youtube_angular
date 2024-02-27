import {Routes} from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { SubscriptionsContentComponent } from './components/subscriptions-content/subscriptions-content.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: MainBodyComponent
  },
  {
    path: 'subscriptions',
    component: SubscriptionsContentComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];
import { RouterModule, Routes} from '@angular/router';
import { EspetaculosListComponent } from './espetaculos-list/espetaculos-list.component';
import { PoltronasListComponent } from './poltronas-list/poltronas-list.component';
import { PoltronasDetailComponent } from './poltronas-detail/poltronas-detail.component';
import { ReservasDetailComponent } from './reservas-detail/reservas-detail.component';
import { EspetaculoDetailComponent } from './espetaculo-detail/espetaculo-detail.component';


const appRoutes: Routes = [
  
    { path: '', component: EspetaculosListComponent  },
    { path: 'poltronas', component: PoltronasListComponent  },
    { path: 'espetaculo-detail/:id', component: EspetaculoDetailComponent, },
    { path: 'poltronas-detail/:id', component: PoltronasDetailComponent, },
    { path: 'reservas-detail/:id', component: ReservasDetailComponent, },    
    // { path: '**', redirectTo: 'espetaculos/' },
    
  ]


export const routing = RouterModule.forRoot(appRoutes);
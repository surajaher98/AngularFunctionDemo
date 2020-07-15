import { Routes, RouterModule } from '@angular/router';
import { Constants } from '@app/shared.module';
import { LayoutComponent } from './components';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
        ]
    }
];

export const LayoutRoutes = RouterModule.forChild(routes);

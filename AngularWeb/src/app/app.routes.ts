import { Routes, RouterModule } from '@angular/router';
import { Constants } from '@app/shared.module';
import { LoginComponent } from '@app/login.module';


export const routes: Routes = [
    { path: '', redirectTo: `/${Constants.routerPaths.login}`, pathMatch: 'full' },
    { path: `${Constants.routerPaths.login}`, component: LoginComponent },
    { path: `${Constants.routerPaths.app}`, loadChildren: `./${Constants.routerPaths.layoutModule}` },
    { path: `${Constants.routerPaths.noMatch}`, redirectTo: `/${Constants.routerPaths.login}` },
];

export const AppRoutes = RouterModule.forRoot(routes);

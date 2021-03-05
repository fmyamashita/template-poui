import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
      path: 'main',
        loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false } )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }


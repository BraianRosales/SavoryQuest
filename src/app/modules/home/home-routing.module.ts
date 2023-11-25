import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'categories',
            },
            {
                path: 'categories',
                loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
            },
            {
                path: 'categories',
                loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
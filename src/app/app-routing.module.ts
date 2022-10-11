import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './modules/catalog/catalog.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

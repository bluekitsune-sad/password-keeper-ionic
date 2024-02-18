import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'passgenerator',
    loadChildren: () => import('./passgenerator/passgenerator.module').then( m => m.PassgeneratorPageModule)
  },
  {
    path: 'userpage',
    loadChildren: () => import('./userpage/userpage.module').then( m => m.UserpagePageModule)
  },
  {
    path: 'contactpage',
    loadChildren: () => import('./contactpage/contactpage.module').then( m => m.ContactpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

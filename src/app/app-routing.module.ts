import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota',
    loadChildren: () => import('./anggota/anggota.module').then( m => m.AnggotaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota-tambah',
    loadChildren: () => import('./anggota-tambah/anggota-tambah.module').then( m => m.AnggotaTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota-edit/:id_anggota',
    loadChildren: () => import('./anggota-edit/anggota-edit.module').then( m => m.AnggotaEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./anggota/anggota.module').then( m => m.AnggotaPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'anggota',
    loadChildren: () => import('./anggota/anggota.module').then( m => m.AnggotaPageModule)
  },
  // {
  //   path: 'anggota-tambah',
  //   loadChildren: () => import('./anggota-tambah/anggota-tambah.module').then( m => m.AnggotaTambahPageModule)
  // },
  // {
  //   path: 'buku-edit/:id_anggota',
  //   loadChildren: () => import('./anggota-edit/anggota-edit.module').then( m => m.AnggotaEditPageModule)
  // },
  {
    path: 'anggota',
    loadChildren: () => import('./anggota/anggota.module').then( m => m.AnggotaPageModule)
  },
  {
    path: 'anggota-tambah',
    loadChildren: () => import('./anggota-tambah/anggota-tambah.module').then( m => m.AnggotaTambahPageModule)
  },
  {
    path: 'anggota-edit/:id_anggota',
    loadChildren: () => import('./anggota-edit/anggota-edit.module').then( m => m.AnggotaEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

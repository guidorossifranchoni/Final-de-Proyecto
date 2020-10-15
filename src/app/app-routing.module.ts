import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      
    },
    {
      path: ":id",
      loadChildren: () => import('./paciente/paciente.module').then( m => m.PacientePageModule)
      
    }
    ]
  },
  {
    path: 'paciente',
    children:[{
      path: "",
      loadChildren: () => import('./paciente/paciente.module').then( m => m.PacientePageModule)
      
    },
    {
      path: ":id",
      loadChildren: () => import('./sesiones/sesiones.module').then( m => m.SesionesPageModule)
      
    }
    ]
  },

  {
    path: 'sesiones',
    children:[{
      path: "",
      loadChildren: () => import('./sesiones/sesiones.module').then( m => m.SesionesPageModule)
      
    },
    {
      path: ":id/:fecha",
      loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
      
    }
    ]
  },
  
  {
    path: 'sesion',
    children:[{
      path: "",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      
    },
    {
      path: ":fecha",
      loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
      
    }
    ]

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
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

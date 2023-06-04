import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { ListComponent } from './list/list.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

const routes: Routes = [
  {path:'',redirectTo:'home/inicio',pathMatch:'full'},
  {path:'home',component: HomePage,children:[
    {path:'inicio', component:InicioComponent},
    {path:"habitacion",component:HabitacionComponent},
    {path:'list',component:ListComponent}
  ]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

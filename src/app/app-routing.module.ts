import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowmapComponent } from './showmap/showmap.component';
import { HomeComponent } from './home/home.component';
import { AddempComponent } from './addemp/addemp.component';
import { ShowempComponent } from './showemp/showemp.component';
import { DelempComponent } from './delemp/delemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ConceptsComponent } from './concepts/concepts.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'showmap',
    component:ShowmapComponent
  },
  {
    path:'addemp',
    component:AddempComponent
  },
  {
    path:'showemp',
    component:ShowempComponent
  },
  {
    path:'delemp',
    component:DelempComponent
  },
  {
    path:'editemp',
    component:EditempComponent
  },
  {
    path:'concepts',
    component:ConceptsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

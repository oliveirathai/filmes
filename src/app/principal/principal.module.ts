import { NgModule } from '@angular/core';
import { TopoComponent } from './topo/topo.component';


import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
@NgModule({
  imports: [
    CommonModule, 
  ],
  declarations: [TopoComponent, RodapeComponent],
  
  exports: [
    TopoComponent,
    RodapeComponent
  ]
})
export class PrincipalModule { }

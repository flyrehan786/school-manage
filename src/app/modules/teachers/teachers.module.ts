import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [ListComponent, NewComponent, DetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, NewComponent, DetailsComponent],
})
export class TeachersModule { }

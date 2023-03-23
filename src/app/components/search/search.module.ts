import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolModule } from '../tool/tool.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,ToolModule,
    SearchRoutingModule, FormsModule,
    ReactiveFormsModule,
   
  ]
})
export class SearchModule { }

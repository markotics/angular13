import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolComponent } from './tool.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToolComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[ToolComponent]
})
export class ToolModule { }

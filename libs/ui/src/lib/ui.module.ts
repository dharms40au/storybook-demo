import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DisplayComponent],
  exports: [DisplayComponent],
})
export class UiModule {}

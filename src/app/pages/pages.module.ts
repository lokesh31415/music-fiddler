import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './components';

@NgModule({
  declarations: [ProvidersComponent],
  imports: [CommonModule],
  exports: [ProvidersComponent],
})
export class PagesModule {}

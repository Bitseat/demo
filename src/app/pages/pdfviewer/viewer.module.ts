import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerComponent } from './viewer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ViewerRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    InlineSVGModule.forRoot(),
  ],
  declarations: [
    ViewerComponent,
  ],
  providers: [],
  bootstrap: [ViewerComponent],
})
export class ViewerModule { }

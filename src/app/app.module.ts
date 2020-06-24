/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './material.module';

//import { StudentsListComponent } from './pages/students-list/students-list.component';
//import { EditStudentComponent } from './pages/edit-student/edit-student.component';


import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';


import { BusinessService } from './business.service';



//import { GstAddComponent } from './pages/gst-add/gst-add.component';
import { GstGetComponent } from './pages/gst-get/gst-get.component';
import { GstEditComponent } from './pages/gst-edit/gst-edit.component';
import { EditorsComponent } from './pages/editors/editors.component';


//import { ReviewComponent } from './pages/editors/editors.component';
import { ViewerComponent } from './pages/pdfviewer/viewer.component';



import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';








import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

@NgModule({

 
  declarations: [AppComponent,
  
    // GstAddComponent,
    GstGetComponent,
    GstEditComponent,
   // EditorsComponent,
    
    //PdfViewerModule,
    //InlineSVGModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,


    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    Ng2SearchPipeModule,
    


    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [BusinessService]
})
export class AppModule {
}

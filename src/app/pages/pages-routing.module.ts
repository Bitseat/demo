import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigureComponent } from './configure/configure.component';
import { EditorsComponent } from './editors/editors.component';
import { ViewerComponent } from './pdfviewer/viewer.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
//import { StudentsListComponent } from './students-list/students-list.component';
//import { EditStudentComponent } from './edit-student/edit-student.component';


import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
//import { ViewerComponent } from './pdfviewer/viewer.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'drag-drop',
      component: DragDropComponent,
    },
    {
      path: 'editors',
      component: EditorsComponent,
    },
    {
      path: 'configure',
      component: ConfigureComponent,
    },
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    
    {
      path: 'business',
      component: GstGetComponent
  } ,
  {
      path: 'business/edit/:id',
      component: EditorsComponent,

  },
  {
    path: 'editors/:id',
    component: EditorsComponent,
  },
  
 
  
  {
      path: 'pdfviewer',
      component: ViewerComponent,

  },
  
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

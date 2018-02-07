import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateFormComponent } from './create-form/create-form.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import{MatSortModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule, MatSelectModule, MatCheckboxModule, MatNativeDateModule, MatDialogModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{routing} from './app.route';
import { SatisfactionFactorsComponent } from './satisfaction-factors/satisfaction-factors.component';
import { MyDialogComponentComponent } from './my-dialog-component/my-dialog-component.component';
import { UserDataDemoComponent } from './user-data-demo/user-data-demo.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    CreateFormComponent,
    SatisfactionFactorsComponent,
    MyDialogComponentComponent,
    UserDataDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    routing,
    FormsModule,
    MatDialogModule,
    HttpModule

    
  ],
  entryComponents:[
    MyDialogComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

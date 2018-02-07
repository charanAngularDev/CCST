import{Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { SatisfactionFactorsComponent } from './satisfaction-factors/satisfaction-factors.component';
import { UserDataDemoComponent } from './user-data-demo/user-data-demo.component';

const routes:Routes=[
    {
        path:'',
        redirectTo:'/dash',
        pathMatch:'full'
    },
    {
        path:'dash',
        component:DashboardComponent,
    },
    {
        path:'projects',
        component:ProjectsComponent
    },
    {
        path:'createForm',
        component:CreateFormComponent
    },
    {
        path:'satisfactionFactors',
        component:SatisfactionFactorsComponent
    },
    {
       path:'userData',
       component:UserDataDemoComponent
    }
];

export const routing:ModuleWithProviders =RouterModule.forRoot(routes);
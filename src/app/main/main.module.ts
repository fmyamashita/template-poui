import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { MainRoutingModule } from './main-routing.module';
import { StorageComponent } from './storage/storage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent,
        StorageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PoTemplatesModule,
        MainRoutingModule  ]
})
export class MainModule { }

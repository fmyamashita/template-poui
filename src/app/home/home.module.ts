import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PoTemplatesModule,
        HomeRoutingModule  ]
})
export class HomeModule { }

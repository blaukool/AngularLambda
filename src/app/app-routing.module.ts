import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/firstComponent', pathMatch: 'full' },
      { path: 'firstComponent', component: FirstComponent },
      { path: 'secondComponent', component: SecondComponent },
      { path: 'thirdComponent', component: ThirdComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { LogInComponent } from './log-in/log-in.component';




const routes: Routes = [
  { path: 'name-editor', component: NameEditorComponent,},
  { path: 'login', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


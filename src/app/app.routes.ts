import { Routes } from '@angular/router';
import { DmnEditorComponent } from './features/dmn-editor/dmn-editor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dmn', pathMatch: 'full' },
  { path: 'dmn', component: DmnEditorComponent }
];


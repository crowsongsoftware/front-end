import { NgModule } from '@angular/core';

// Editor
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    AngularEditorModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
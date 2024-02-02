import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-massage-dialog',
  templateUrl: './massage-dialog.component.html',
  styleUrls: ['./massage-dialog.component.scss']
})
export class MassageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}

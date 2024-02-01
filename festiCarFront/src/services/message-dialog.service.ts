import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MassageDialogComponent } from 'src/app/massage-dialog/massage-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  dialogRef: MatDialogRef<MassageDialogComponent>;

  constructor(private dialog: MatDialog) { }

  
  openDialog(message: string): void {
    this.dialogRef = this.dialog.open(MassageDialogComponent, {
      data: { message },
      width: '400px',
    });
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}

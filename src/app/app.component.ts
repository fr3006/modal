import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MapaComponent } from './mapa/mapa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  animal: string;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {

   const dialogRef = this.dialog.open(MapaComponent, {
      data: {
        animal: 'panda'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('ya');
      this.animal = result;
    });
  }
}

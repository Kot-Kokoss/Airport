import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnTranslationService } from '../services/column-translate.service';
import { sharedImports } from '../imports/imports';
import { BaseService } from '../services/base.service';

export interface DialogData {
  type: string;
}

@Component({
  selector: 'app-dialog-delite',
  templateUrl: './dialog-delite.component.html',
  styleUrl: './dialog-delite.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ...sharedImports,
  ],
})
export class DialogDeliteComponent {
  type: string = '';
  item = null;

  constructor(
    public transle: ColumnTranslationService,
    public baseService: BaseService,
    public dialogRef: MatDialogRef<DialogDeliteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.type = this.data.type;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  transleItem(item: string): string {
    return this.transle.getTranslation(item);
  }

  sendData() {
    if (this.type === 'Employee') {
      this.baseService.deleteEmployee(Number(this.item)).subscribe();
    }
    if (this.type === 'Position') {
      this.baseService.deletePosition(Number(this.item)).subscribe();
    }
    if (this.type === 'Plane') {
      this.baseService.deletePlane(Number(this.item)).subscribe();
    }
    if (this.type === 'PlaneType') {
      this.baseService.deletePlaneType(Number(this.item)).subscribe();
    }
    if (this.type === 'Crew') {
      this.baseService.deleteCrew(Number(this.item)).subscribe();
    }
    if (this.type === 'Flight') {
      this.baseService.deleteFlight(Number(this.item)).subscribe();
    }
    if (this.type === 'Ticket') {
      this.baseService.deleteTicket(Number(this.item)).subscribe();
    }
  }
}

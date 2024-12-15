import { Component } from '@angular/core';
import { sharedImports } from '../imports/imports';
import { BaseService } from '../services/base.service';
import { ColumnTranslationService } from '../services/column-translate.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../dialog/dialog.component';
import { DialogDeliteComponent } from '../dialog-delite/dialog-delite.component';

@Component({
  selector: 'app-edit-stats',
  standalone: true,
  imports: [...sharedImports],
  templateUrl: './edit-stats.component.html',
  styleUrl: './edit-stats.component.scss',
})
export class EditStatsComponent {
  displayedColumns: string[] = [];
  dataSource: any[] = [];
  tableType: string = '';

  constructor(
    public baseService: BaseService,
    public transle: ColumnTranslationService,
    public dialog: MatDialog
  ) {}

  flattenObject(
    obj: any,
    parentKey: string = '',
    result: { [key: string]: any } = {}
  ): { [key: string]: any } {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = parentKey ? `${parentKey}${key}` : key;
        if (
          typeof obj[key] === 'object' &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          this.flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

  transleColumn(column: string): string {
    return this.transle.getTranslation(column);
  }

  getElement(el: any) {
    if (Array.isArray(el)) {
      return el.join(',\n');
    }
    return el;
  }

  addItem() {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      height: 'auto',
      width: '400px',
      data: { type: this.tableType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onAction(this.tableType);
    });
  }

  removeItem() {
    const dialogRef = this.dialog.open(DialogDeliteComponent, {
      height: 'auto',
      width: '400px',
      data: { type: this.tableType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onAction(this.tableType);
    });
  }

  onAction(type: string): void {
    if (type === 'Employee') {
      this.baseService.getAllEmployee().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    if (type === 'Position') {
      this.baseService.getAllPosition().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    if (type === 'Plane') {
      this.baseService.getAllPlane().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    if (type === 'PlaneType') {
      this.baseService.getAllPlaneType().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    if (type === 'Crew') {
      this.baseService.getAllCrew().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    if (type === 'Flight') {
      this.baseService.getAllFlight().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    if (type === 'Ticket') {
      this.baseService.getAllTicket().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
      });
    }
    this.tableType = type;
  }
}

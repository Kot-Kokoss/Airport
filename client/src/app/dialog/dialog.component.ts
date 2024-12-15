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
import {
  Crew,
  crewMapping,
  Employee,
  employeeMapping,
  Flight,
  flightMapping,
  FORM_CONFIG,
  FormFieldConfig,
  Mapping,
  Plane,
  planeMapping,
  PlaneType,
  planeTypeMapping,
  Position,
  positionMapping,
  Ticket,
  ticketMapping,
} from '../consts/create-models';
import { sharedImports } from '../imports/imports';
import { BaseService } from '../services/base.service';

export interface DialogData {
  type: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrl: 'dialog.component.scss',
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
export class CreateDialogComponent {
  type: string = '';
  formConfig: FormFieldConfig[] = [];
  item: any = {};

  constructor(
    public transle: ColumnTranslationService,
    public baseService: BaseService,
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.type = this.data.type;
    this.formConfig = FORM_CONFIG[this.type] || [];
    this.setForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  transleItem(item: string): string {
    return this.transle.getTranslation(item);
  }

  setForm() {
    this.item = {};
    this.formConfig.forEach((field) => {
      this.setItemFieldValue(field.model, null);
    });
  }

  setItemFieldValue(model: string, value: any) {
    const keys = model.split('.');
    let current = this.item;
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value;
      } else {
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }
    });
  }

  isFormValid(): boolean {
    return this.formConfig.every((field) => {
      const value = this.item[field.model];
      return value && value.trim() !== '';
    });
  }

  transformData<T>(formData: any, mapping: Mapping): T {
    const transformedData: any = {};

    for (const key in mapping) {
      if (mapping.hasOwnProperty(key)) {
        const value = mapping[key];

        if (typeof value === 'function') {
          transformedData[key] = value(formData);
        } else {
          transformedData[key] = formData[value];
        }
      }
    }

    return transformedData;
  }

  sendData() {
    if (this.type === 'Employee') {
      const transformedData = this.transformData<Employee>(
        this.item,
        employeeMapping
      );
      this.baseService.createEmployee(transformedData).subscribe();
    }
    if (this.type === 'Position') {
      const transformedData = this.transformData<Position>(
        this.item,
        positionMapping
      );
      this.baseService.createPosition(transformedData).subscribe();
    }
    if (this.type === 'Plane') {
      const transformedData = this.transformData<Plane>(
        this.item,
        planeMapping
      );
      this.baseService.createPlane(transformedData).subscribe();
    }
    if (this.type === 'PlaneType') {
      const transformedData = this.transformData<PlaneType>(
        this.item,
        planeTypeMapping
      );
      this.baseService.createPlaneType(transformedData).subscribe();
    }
    if (this.type === 'Crew') {
      const transformedData = this.transformData<Crew>(this.item, crewMapping);
      this.baseService.createCrew(transformedData).subscribe();
    }
    if (this.type === 'Flight') {
      const transformedData = this.transformData<Flight>(
        this.item,
        flightMapping
      );
      this.baseService.createFlight(transformedData).subscribe();
    }
    if (this.type === 'Ticket') {
      const transformedData = this.transformData<Ticket>(
        this.item,
        ticketMapping
      );
      this.baseService.createTicket(transformedData).subscribe();
    }
  }
}

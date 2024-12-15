export interface Employee {
  FullName: string;
  Age: number;
  Gender: 'male' | 'female';
  Address: string;
  Phone: string;
  Passport: {
    serial: number;
    number: number;
    date: string;
  };
  PositionID: number;
}

export interface Position {
  Name: string;
  Salary: number;
  Duties: string[];
  Requirements: string[];
}

export interface Plane {
  Mark: string;
  Capacity: number;
  Tonnage: string;
  TypeID: number;
  Characteristic: string;
  ReleaseDate: string;
  FlyingHours?: number;
  LastRepairDate?: Date;
  EmployeeID: number;
}

export interface PlaneType {
  Constraint: string;
  Name: string;
  Target: string;
  TypeID: number;
}

export interface FormFieldConfig {
  label: string;
  type: string;
  model: string;
  options?: { label: string; value: any }[];
}

export interface Crew {
  EmployeeID_1: number;
  EmployeeID_2: number;
  EmployeeID_3: number;
  FlyingHours: number;
}

export interface Flight {
  CrewID: number;
  Date: Date;
  FlightTime: string;
  From: string;
  PlaneID: number;
  Time: string;
  To: string;
}

export interface Ticket {
  FlightID: number;
  FullName: string;
  Passport: {
    date: Date;
    number: number;
    serial: number;
  };
  Price: number;
  Seat: string;
}

interface FormConfig {
  [key: string]: FormFieldConfig[];
}

export const FORM_CONFIG: FormConfig = {
  Employee: [
    { label: 'ФИО', type: 'text', model: 'FullName' },
    { label: 'Возраст', type: 'number', model: 'Age' },
    {
      label: 'Пол',
      type: 'select',
      model: 'Gender',
      options: [
        { label: 'Мужской', value: 'male' },
        { label: 'Женский', value: 'female' },
      ],
    },
    { label: 'Адрес', type: 'text', model: 'Address' },
    { label: 'Телефон', type: 'text', model: 'Phone' },
    { label: 'Серия паспорта', type: 'number', model: 'Passport.serial' },
    { label: 'Номер паспорта', type: 'number', model: 'Passport.number' },
    { label: 'Дата выдачи паспорта', type: 'date', model: 'Passport.date' },
    { label: 'Код должности', type: 'number', model: 'PositionID' },
  ],
  Position: [
    { label: 'Название', type: 'text', model: 'Name' },
    { label: 'Зарплата', type: 'number', model: 'Salary' },
    {
      label: 'Обязанности',
      type: 'textarea',
      model: 'Duties',
    },
    {
      label: 'Требования',
      type: 'textarea',
      model: 'Requirements',
    },
  ],
  Plane: [
    { label: 'Марка', type: 'text', model: 'Mark' },
    { label: 'Вместимость', type: 'number', model: 'Capacity' },
    { label: 'Тоннаж', type: 'text', model: 'Tonnage' },
    { label: 'ID типа', type: 'number', model: 'TypeID' },
    { label: 'Характеристика', type: 'text', model: 'Characteristic' },
    { label: 'Дата выпуска', type: 'date', model: 'ReleaseDate' },
    { label: 'Летные часы', type: 'number', model: 'FlyingHours' },
    { label: 'Дата последнего ремонта', type: 'date', model: 'LastRepairDate' },
    { label: 'ID сотрудника', type: 'number', model: 'EmployeeID' },
  ],
  PlaneType: [
    { label: 'Ограничения', type: 'text', model: 'Constraint' },
    { label: 'Название', type: 'text', model: 'Name' },
    { label: 'Назначение', type: 'text', model: 'Target' },
    { label: 'ID типа', type: 'number', model: 'TypeID' },
  ],
  Crew: [
    { label: 'Код сотрудника 1', type: 'number', model: 'EmployeeID_1' },
    { label: 'Код сотрудника 2', type: 'number', model: 'EmployeeID_2' },
    { label: 'Код сотрудника 3', type: 'number', model: 'EmployeeID_3' },
    { label: 'Часы полета', type: 'number', model: 'FlyingHours' },
  ],
  Flight: [
    { label: 'Код экипажа', type: 'number', model: 'CrewID' },
    { label: 'Дата', type: 'date', model: 'Date' },
    { label: 'Время полета', type: 'text', model: 'FlightTime' },
    { label: 'Откуда', type: 'text', model: 'From' },
    { label: 'Код самолета', type: 'number', model: 'PlaneID' },
    { label: 'Время', type: 'text', model: 'Time' },
    { label: 'Куда', type: 'text', model: 'To' },
  ],
  Ticket: [
    { label: 'Код рейса', type: 'number', model: 'FlightID' },
    { label: 'ФИО', type: 'text', model: 'FullName' },
    { label: 'Серия паспорта', type: 'number', model: 'Passport.serial' },
    { label: 'Номер паспорта', type: 'number', model: 'Passport.number' },
    { label: 'Дата выдачи паспорта', type: 'date', model: 'Passport.date' },
    { label: 'Цена', type: 'number', model: 'Price' },
    { label: 'Место', type: 'text', model: 'Seat' },
  ],
};

export interface Mapping {
  [key: string]: string | ((value: any) => any);
}

export const employeeMapping: Mapping = {
  FullName: 'FullName',
  Age: (value) => parseInt(value['Age'], 10),
  Gender: 'Gender',
  Address: 'Address',
  Phone: 'Phone',
  Passport: (formData) => ({
    serial: parseInt(formData['Passport.serial'], 10),
    number: parseInt(formData['Passport.number'], 10),
    date: formData['Passport.date'],
  }),
  PositionID: (value) => parseInt(value['PositionID'], 10),
};

export const positionMapping: Mapping = {
  Name: 'Name',
  Salary: (formData) => parseFloat(formData['Salary']),
  Duties: (formData) =>
    formData['Duties'].split(',').map((duty: any) => duty.trim()),
  Requirements: (formData) =>
    formData['Requirements'].split(',').map((req: any) => req.trim()),
};
export const planeMapping: Mapping = {
  Mark: 'Mark',
  Capacity: 'Capacity',
  Tonnage: 'Tonnage',
  TypeID: 'TypeID',
  Characteristic: 'Characteristic',
  ReleaseDate: 'ReleaseDate',
  FlyingHours: 'FlyingHours',
  LastRepairDate: 'LastRepairDate',
  EmployeeID: 'EmployeeID',
};

export const planeTypeMapping: Mapping = {
  Constraint: 'Constraint',
  Name: 'Name',
  Target: 'Target',
  TypeID: 'TypeID',
};

export const crewMapping: Mapping = {
  EmployeeID_1: 'EmployeeID_1',
  EmployeeID_2: 'EmployeeID_2',
  EmployeeID_3: 'EmployeeID_3',
  FlyingHours: 'FlyingHours',
};

export const flightMapping: Mapping = {
  CrewID: 'CrewID',
  Date: 'Date',
  FlightTime: 'FlightTime',
  From: 'From',
  PlaneID: 'PlaneID',
  Time: 'Time',
  To: 'To',
};

export const ticketMapping: Mapping = {
  FlightID: 'FlightID',
  FullName: 'FullName',
  Passport: (formData) => ({
    serial: parseInt(formData['Passport.serial'], 10),
    number: parseInt(formData['Passport.number'], 10),
    date: formData['Passport.date'],
  }),
  Price: 'Price',
  Seat: 'Seat',
};

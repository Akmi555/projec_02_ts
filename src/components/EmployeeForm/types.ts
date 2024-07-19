export interface EmployeeFormValues {
    employeeName: string;
    employeeSurName: string;
    jobTitle: string
  }

export enum EMPLOYEE_FORM_NAME {
    NAME = 'employeeName',
    SURNAME = 'employeeSurName',
    JOBTITLE = 'jobTitle'
}


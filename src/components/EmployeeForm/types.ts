export interface EmployeeFormValues {
  employeeName: string;
  employeeSurName: string;
  jobTitle: string;
  salary: number;
}

export enum EMPLOYEE_FORM_NAME {
  NAME = "employeeName",
  SURNAME = "employeeSurName",
  JOBTITLE = "jobTitle",
  SALARY = "salary",
}

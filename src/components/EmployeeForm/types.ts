export interface EmployeeFormValues {
  employeeName: string;
  employeeSurName: string;
  jobTitle: string;
  salary: string;
  agree: boolean;
}

export enum EMPLOYEE_FORM_NAME {
  NAME = "employeeName",
  SURNAME = "employeeSurName",
  JOBTITLE = "jobTitle",
  SALARY = "salary",
  AGREE = "agree",
}

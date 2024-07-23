import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import {
  EmployeeFormWrapper,
  EmployeeFormTitle,
  InputsContainer,
} from "./styles";
import Button from "components/Button/Button";
import { EMPLOYEE_FORM_NAME, EmployeeFormValues } from "./types";

function EmployeeForm() {
  // Создадние объекта валидации с помощью Yap
  const schema = Yup.object().shape({
    [EMPLOYEE_FORM_NAME.NAME]: Yup.string()
    .required()
    .min(2, 'Min 2 symbols')
    . max(20, 'Max 20 symbols'),
    [EMPLOYEE_FORM_NAME.SURNAME]: Yup.string()
    .required()
    .min(2, 'Min 2 symbols')
    .max(130, 'Max 130 simbols'),
    [EMPLOYEE_FORM_NAME.JOBTITLE]: Yup.string()
    .max(30, 'Max 30 simbols'),
    [EMPLOYEE_FORM_NAME.SALARY]: Yup.number()
    .required()
    .max(5, 'Max 5 simbols')
  })

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAME.NAME]: "",
      [EMPLOYEE_FORM_NAME.SURNAME]: "",
      [EMPLOYEE_FORM_NAME.JOBTITLE]: "",
      [EMPLOYEE_FORM_NAME.SALARY]: 0,
    } as EmployeeFormValues,
    // Привязка Yup и Formik
    validationSchema: schema,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <EmployeeFormTitle>Employee Form</EmployeeFormTitle>
      <InputsContainer>
        <Input
          id="employee_name_id"
          label="EmployeeName"
          name={EMPLOYEE_FORM_NAME.NAME}
          placeholder="Enter employee Name"
          value={formik.values[EMPLOYEE_FORM_NAME.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAME.NAME]}
        />
        <Input
          id="employee_surname_id"
          label="SurName"
          name={EMPLOYEE_FORM_NAME.SURNAME}
          placeholder="Enter your SurName"
          value={formik.values[EMPLOYEE_FORM_NAME.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAME.SURNAME]}
        />
        <Input
          id="employee_job_id"
          label="JobTitle"
          name={EMPLOYEE_FORM_NAME.JOBTITLE}
          placeholder="Enter your JobTitle"
          value={formik.values[EMPLOYEE_FORM_NAME.JOBTITLE]}
          onChange={formik.handleChange}
        />
        <Input
          id="employee_salary_id"
          label="Salary"
          name={EMPLOYEE_FORM_NAME.SALARY}
          placeholder="Enter your Salary"
          value={formik.values[EMPLOYEE_FORM_NAME.SALARY]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAME.SALARY]}
        />
      </InputsContainer>

      <Button name="Create" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;

import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import {
  EmployeeFormWrapper,
  EmployeeFormTitle,
  InputsContainer,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
} from "./styles";
import Button from "components/Button/Button";
import { EMPLOYEE_FORM_NAME, EmployeeFormValues } from "./types";

function EmployeeForm() {
  // Создадние объекта валидации с помощью Yap
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAME.NAME]: Yup.string()
      .required("Required fieid")
      .min(2, "Min 2 symbols")
      .max(20, "Max 20 symbols"),
    [EMPLOYEE_FORM_NAME.SURNAME]: Yup.string()
      .required("Required fieid")
      .min(2, "Min 2 symbols")
      .max(130, "Max 130 simbols"),
    [EMPLOYEE_FORM_NAME.JOBTITLE]: Yup.string().max(30, "Max 30 simbols"),
    [EMPLOYEE_FORM_NAME.SALARY]: Yup.number()
      .typeError("Must be number")
      .required("Required fieid")
      // .max(5, "Max 5 simbols")
      .test(
        "check length",
        "Max length 5 symbols",
        (value) => String(value).length <= 5
      ),
    [EMPLOYEE_FORM_NAME.AGREE]: Yup.boolean().oneOf([true],'Accept agreement')
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAME.NAME]: "",
      [EMPLOYEE_FORM_NAME.SURNAME]: "",
      [EMPLOYEE_FORM_NAME.JOBTITLE]: "",
      [EMPLOYEE_FORM_NAME.SALARY]: "",
      [EMPLOYEE_FORM_NAME.AGREE]: false,
    } as EmployeeFormValues,
    // Привязка Yup и Formik
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  // console.log(formik);

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <EmployeeFormTitle>Employee Form</EmployeeFormTitle>
      <InputsContainer>
        <Input
          id="employee_name_id"
          label="EmployeeName*"
          name={EMPLOYEE_FORM_NAME.NAME}
          placeholder="Enter employee Name"
          value={formik.values[EMPLOYEE_FORM_NAME.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAME.NAME]}
        />
        <Input
          id="employee_surname_id"
          label="SurName*"
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
          error={formik.errors[EMPLOYEE_FORM_NAME.JOBTITLE]}
        />
        <Input
          id="employee_salary_id"
          label="Salary*"
          name={EMPLOYEE_FORM_NAME.SALARY}
          placeholder="Enter your Salary"
          value={formik.values[EMPLOYEE_FORM_NAME.SALARY]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAME.SALARY]}
        />
      </InputsContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="agree_id"
          name={EMPLOYEE_FORM_NAME.AGREE}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FORM_NAME.AGREE]}
        />
        <CheckboxLabel htmlFor="agree_id">I Agree</CheckboxLabel>
      </CheckboxContainer>
      <Button name="Create" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;

import { useFormik } from "formik";

import Input from "components/Input/Input";
import {
  EmployeeFormWrapper,
  EmployeeFormTitle,
  InputsContainer,
} from "./styles";
import Button from "components/Button/Button";
import { EMPLOYEE_FORM_NAME, EmployeeFormValues } from "./types";

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAME.NAME]: "",
      [EMPLOYEE_FORM_NAME.SURNAME]: "",
      [EMPLOYEE_FORM_NAME.JOBTITLE]: "",
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <EmployeeFormTitle>Employee Form</EmployeeFormTitle>
      <InputsContainer>
        <Input
          label="EmployeeName"
          name={EMPLOYEE_FORM_NAME.NAME}
          placeholder="Enter your Name"
          value={formik.values[EMPLOYEE_FORM_NAME.NAME]}
          onChange={formik.handleChange}
        />
        <Input
          label="SurName"
          name={EMPLOYEE_FORM_NAME.SURNAME}
          placeholder="Enter your SurName"
          value={formik.values[EMPLOYEE_FORM_NAME.SURNAME]}
          onChange={formik.handleChange}
        />
        <Input
          label="JobTitle"
          name={EMPLOYEE_FORM_NAME.JOBTITLE}
          placeholder="Enter your JobTitle"
          value={formik.values[EMPLOYEE_FORM_NAME.JOBTITLE]}
          onChange={formik.handleChange}
        />
      </InputsContainer>

      <Button name="Employee Form" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;

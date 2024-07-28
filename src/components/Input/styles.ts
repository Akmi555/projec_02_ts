import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 4px; */
  width: 400px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  width: 400px;
  height: 30px;
  padding: 12px;
  outline: none;
  border: 1px solid white;
  border-radius: 30px;
  font-size: 14px;
  background-color: rgba(128, 157, 255, 0.5);
  color: white;

  &::placeholder {
    color: #a19f9f;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  height: 20px;
`;

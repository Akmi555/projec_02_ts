import { InputButton, InputForm, InputFormContainer, TaskContainer, TaskItem, TaskRemoveButton, ToDoListContainer } from "./styles";

function ToDoList() {
  return (
    <ToDoListContainer>
      <InputFormContainer>
        <InputForm></InputForm>
        <InputButton></InputButton>
      </InputFormContainer>
      <TaskContainer>
        <TaskItem></TaskItem>
        <TaskRemoveButton></TaskRemoveButton>
      </TaskContainer>
      
    </ToDoListContainer>
  );
}

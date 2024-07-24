import { InputButton, InputForm, InputFormContainer, TaskContainer, TaskItem, TaskRemoveButton, Title, ToDoListContainer } from "./styles";

function ToDoList() {
  return (
    <ToDoListContainer>
      <Title>ToDo list from consultation 5</Title>
      <InputFormContainer>
        <InputForm placeholder="input task"></InputForm>
        <InputButton>add task</InputButton>
      </InputFormContainer>
      <TaskContainer>
        <TaskItem></TaskItem>
        <TaskRemoveButton></TaskRemoveButton>
      </TaskContainer>
      
    </ToDoListContainer>
  );
}

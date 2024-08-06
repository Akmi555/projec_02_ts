import styled from "@emotion/styled";

interface ITaskItem{
  isLast: boolean
}

export const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  border: 2px dashed grey;
`;

export const Title = styled.h1`
  
`;

export const InputFormContainer = styled.form`
  
`;

export const InputForm = styled.input`
  
`;

export const InputButton = styled.button`
  
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  padding: 4px;
`;

export const TaskItem = styled.div<ITaskItem>`
  font-size: 28px;
  font-family: 'Courier New', Courier, monospace;
  background-color: rgb(255, 0, 0, 0.3);
  color: ${({isLast})  => (isLast ? 'blue': 'gray') };
`;

// export const LastTaskItem = styled.div`
//   color: blue;
//   font-weight: 700;
// `;

export const TaskRemoveButton = styled.button`
  
`;

import styled from "styled-components";

// Styling Container
interface RadioBoxProps {
  checked: boolean;
}

interface ContainerProps {
  width: number;
}

export const Container = styled.div`
  margin: ${(props: ContainerProps) => (props.width > 600 ? "20px" : "0px")};
  width: ${(props: ContainerProps) => (props.width > 600 ? "50%" : "100%")};
`;

export const RadioContainer = styled.div`
  background-color: ${(props: RadioBoxProps) =>
    props.checked ? "#e8f2fb" : "#ffffff"};
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  display: flex;
  align-items: center;
`;

export const UserInitials = styled.div`
  background-color: #e8f2fb;
  width: 50px;
  height: 50px;
  color: blue;
  display: flex;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const UserInfoContainer = styled.div`
  line-height: 0;
`;

import styled from "styled-components";

interface RadioBoxProps {
    checked: boolean;
  }

export const Container = styled.div`
  margin: 20px;
`;

export const RadioContainer = styled.div`
    background-color: ${(props: RadioBoxProps) => (props.checked ? "#e8f2fb" : "#ffffff")};
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
`;
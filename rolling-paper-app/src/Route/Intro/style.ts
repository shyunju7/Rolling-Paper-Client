import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  margin-bottom: 120px;
  color: #eca4a6;
`;

export const Description = styled.div`
  width: 50vw;
  background-color: #e7e7e8;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #565555;
  padding: 1rem;
  margin-top: 12px;
  margin-bottom: 8px;
  border-radius: 32px;
`;

export const InputName = styled.input`
  border: none;
  width: 40vw;
  height: 6vh;
  border-radius: 32px;
  background-color: #f1f2f5;
  padding: 12px;
  padding-left: 32px;
  margin-top: 16px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  align-content: center;
  margin-top: 16px;
  padding: 12px;
  color: #eca4a6;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    color: #f9cfd0;
  }
`;

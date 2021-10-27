import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
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

export const SLink = styled(Link)`
  color: #eca4a6;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: #df9b9d;
  }
`;

export const Button = styled.button`
  width: 44vw;
  border-radius: 32px;
  background-color: rgba(232, 212, 212, 0.5);
  border: 1px solid #eca4a6;
  align-content: center;
  margin-top: 16px;
  padding: 12px;
  &:hover {
    background-color: #e8d4d4;
  }
`;

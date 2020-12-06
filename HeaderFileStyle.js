import styled from "styled-components";

export const Container = styled.div`
  background: lightgray;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  /* border: 1px solid coral; */

  border-radius: 10px 10px 0px 0px;
`;
export const ContainerImage = styled.div`
  border-radius: 10px 10px 0px 0px;
  width: 350px;
  height: 300px;
  background: white;
`;
export const ContainerContent = styled.p`
  width: 350px;
  height: 150px;
  margin: 0px;
  background: ${({ isOn }) => (isOn ? "red" : "blue")};
  display: flex;
  justify-content: ${({ position }) => (position ? "flex-start" : "flex-end")};
`;
export const ContainerButton = styled.button`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: ${({ btn }) => (btn ? "green" : "blue")};
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  outline: none;
  border: none;
`;

export const ContainerContentName = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  background: red;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

import React from "react";
import {
  ContainerContentName,
  ContainerButton,
  Container,
  ContainerContent,
  ContainerWrapper,
  ContainerImage,
  Image,
} from "./HeaderFileStyle";
import data from "../Data/HomeData.json";

function HeaderFile() {
  return (
    <>
      {data.map((post) => (
        <Container>
          <ContainerWrapper>
            <ContainerImage>{post.img}</ContainerImage>
            <ContainerContentName>{post.title}</ContainerContentName>
            <ContainerContent position isOn>
              {post.content}
            </ContainerContent>
            <ContainerButton btn>watch</ContainerButton>
          </ContainerWrapper>
        </Container>
      ))}
    </>
  );
}

export default HeaderFile;

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const BackgroundAnimetion = styled.div`
  display: ${(props) => (props.chapter === "16" ? "flex" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: backgroundChapter16-17-18-32 ${(props) => props.imgs.data.length - 1}s
    cubic-bezier(1, -1, 0, 2) infinite alternate;

  @keyframes backgroundChapter16-17-18-32 {
    ${(props) =>
      props.imgs.data.map(
        (val, i, arr) => `${(100 / (arr.length - 1)) * i}% {
    background-image: url(${val});
    background-size: 100% 100%;
  }`
      )}
  }
`;

export function BackgroundChapter16(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  return (
    <BackgroundAnimetion
      className="lazy-background"
      chapter={backgroundReducer.chapter}
      imgs={imageReducer.chapter16}
    >
      {props.children}
    </BackgroundAnimetion>
  );
}

export default BackgroundChapter16;
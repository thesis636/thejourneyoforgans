import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter77ImageAction } from "../../../actions/chapter77/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "76" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "76" ? "show" : "hidden")} 2s;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};

  @keyframes show {
    0% {
      opacity: 0%;
    }

    25% {
      opacity: 25%;
    }

    77% {
      opacity: 77%;
    }

    75% {
      opacity: 75%;
    }

    100% {
      opacity: 100%;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 100%;
    }

    25% {
      opacity: 75%;
    }

    77% {
      opacity: 77%;
    }

    75% {
      opacity: 25%;
    }

    100% {
      opacity: 0%;
      cursor: default;
      width: 0px;
      display: none;
    }
  }
`;

export function MessageChapter76() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter77ImageAction());
  }, []);
  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter77.loading}
    >
      <div>
        {dataReducer.chapter76.messageBox1.map((msg, key) => (
          <p
            key={key}
            style={{
              margin: 0,
            }}
          >
            {msg}
          </p>
        ))}
      </div>
      <div
        style={{
          display: !imageReducer.chapter77.loading ? "block" : "none",
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
        onClick={() => {
          if (!imageReducer.chapter77.loading) {
            dispatch({
              type: dataReducer.chapter76.buttons[0].onClick.setBackground.type,
              payload:
                dataReducer.chapter76.buttons[0].onClick.setBackground.payload,
            });
            dispatch({
              type: dataReducer.chapter76.buttons[0].onClick.setMessage.type,
              payload:
                dataReducer.chapter76.buttons[0].onClick.setMessage.payload,
            });
          }
        }}
      ></div>
    </MessageAnimetion>
  );
}

export default MessageChapter76;
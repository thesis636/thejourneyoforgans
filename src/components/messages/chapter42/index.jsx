import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter43ImageAction } from "../../../actions/chapter43/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "42" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "42" ? "show" : "hidden")} 2s;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};

  @keyframes show {
    0% {
      opacity: 0%;
    }

    25% {
      opacity: 25%;
    }

    50% {
      opacity: 50%;
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

    50% {
      opacity: 50%;
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

export function MessageChapter42() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter43ImageAction());
  }, []);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter43.loading}
    >
      <div>
        {dataReducer.chapter42.messageBox1.map((msg, key) => (
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
          padding: 35,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <textarea
            style={{
              width: "100%",
              borderRadius: 10,
              border: 0,
              padding: "5px 10px",
            }}
            rows={5}
            id="massage"
            placeholder="พิมพ์คำตอบ"
            name="massage"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            defaultValue={dataReducer.chapter42.data.message}
          />
        </div>
        <div
          style={{
            padding: 15,
          }}
        >
          {dataReducer.chapter42.buttons.map((btn, key) => (
            <button
              key={key}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch({
                  type: btn.onClick.setBackground.type,
                  payload: btn.onClick.setBackground.payload,
                });
                dispatch({
                  type: btn.onClick.setMessage.type,
                  payload: btn.onClick.setMessage.payload,
                });
                dispatch({
                  type: btn.onClick.setDataChapter.type,
                  payload: {
                    ...dataReducer.chapter42,
                    data: {
                      ...dataReducer.chapter42.data,
                      message: message,
                    },
                  },
                });
              }}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>
    </MessageAnimetion>
  );
}

export default MessageChapter42;
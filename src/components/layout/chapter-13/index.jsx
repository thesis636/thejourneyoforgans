import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter13() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "13" ? "block" : "none",
        animation:
          layoutReducer.step === "13" && `keyframe-layout-chapter-show-text 1s`,
          marginBottom: 300,
          fontSize: 25,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
          }}
        >
          จำไม่ได้แม้แต่ชื่อของตัวเอง
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter13;

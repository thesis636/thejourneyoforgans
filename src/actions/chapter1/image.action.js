import {
  chapter1Image1Service,
  chapter1Image2Service,
  chapter1Image3Service,
  chapter1Image4Service,
  chapter1Image5Service,
  chapter1Image6Service,
  chapter1Image7Service,
} from "../../services/chapter1/image.service";

export const chapter1ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER1_IMAGE_LOADING", payload: true });
    const chapter1Image1 = await chapter1Image1Service();
    const chapter1Image2 = await chapter1Image2Service();
    const chapter1Image3 = await chapter1Image3Service();
    const chapter1Image4 = await chapter1Image4Service();
    const chapter1Image5 = await chapter1Image5Service();
    const chapter1Image6 = await chapter1Image6Service();
    const chapter1Image7 = await chapter1Image7Service();

    dispatch({
      type: "SET_CHAPTER1_IMAGE",
      payload: [
            chapter1Image1,
            chapter1Image2,
            chapter1Image3,
            chapter1Image4,
            chapter1Image5,
            chapter1Image6,
            chapter1Image7,
          ],
    });

    dispatch({ type: "SET_CHAPTER1_IMAGE_LOADING", payload: false });
    dispatch({ type: "SET_BACKGROUND", payload: "1" });
    dispatch({ type: "SET_MESSAGE", payload: "1" });
  } catch (err) {}
};
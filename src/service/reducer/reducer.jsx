import { Add_tO_form } from "../contant/contant";

const initialState = {
  FormData: [],
};

export default function formItem(state = initialState, action) {
  switch (action.type) {
    case Add_tO_form:
      return {
        ...state,
        FormData: [...state.FormData, action.data],
      };
    default:
      return state;
  }
}

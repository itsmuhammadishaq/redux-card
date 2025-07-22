import { Add_tO_form } from "../contant/contant";
export const AddTOFromData = (data) => {
  return {
    type: Add_tO_form,
    data: data,
  };
};

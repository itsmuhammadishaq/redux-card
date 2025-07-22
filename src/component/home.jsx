import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { RHFTextField } from "../hook-form/rhf-text-field";

const Home = ({ data, AddtoCardHandle }) => {
  console.log("props data", data);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup.string().required("Age is required"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: data?.name || "",
      age: data?.age || "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (formData) => {
    AddtoCardHandle(formData);
    reset();
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <RHFTextField name="name" label="Name" />
          <RHFTextField name="age" label="Age" />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Home;

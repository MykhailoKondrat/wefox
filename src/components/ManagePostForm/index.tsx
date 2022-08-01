import { Box, Button, TextField } from "@mui/material";
import React, { FC } from "react";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import { PostItemProps } from "../PostItem";
type FormDefaultValues = Omit<PostItemProps, "toggleEditMode">
interface ManagePostFormProps {
  defaultValues?: FormDefaultValues;
  onFormSubmit?: () => void;
}
export const ManagePostForm: FC<ManagePostFormProps> = ({
  defaultValues,
  onFormSubmit,
}) => {
  const { control, handleSubmit } = useForm<FormDefaultValues>({
    defaultValues: {
      title: defaultValues?.title ?? "",
      content: defaultValues?.content ?? "",
      image_url: defaultValues?.image_url ?? "",
      lat: defaultValues?.lat ?? "",
      long: defaultValues?.long ?? "",
    },
  });
  const onSubmit: SubmitHandler<FormDefaultValues> = (values, e) => {
    e?.preventDefault();
    console.log(values);
  };

  return (
    <Box
      p={4}
      width={"100%"}
      sx={{
        "& .MuiTextField-root": { mb: 2 },
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField  label={"Title"} required fullWidth {...field} />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              maxRows={5}
              label="Content"
              required
              fullWidth
              multiline
              {...field}
            />
          )}
        />
        <Controller
          name="image_url"
          control={control}
          render={({ field }) => (
            <TextField fullWidth label="Image URL" {...field} />
          )}
        />
        <Controller
          name="lat"
          control={control}
          render={({ field }) => (
            <TextField fullWidth label="Latitude" {...field} />
          )}
        />
        <Controller
          name="long"
          control={control}
          render={({ field }) => (
            <TextField fullWidth label="Longitude" {...field} />
          )}
        />
        <Button fullWidth variant="contained" type={"submit"}>
          Save
        </Button>
      </form>
    </Box>
  );
};
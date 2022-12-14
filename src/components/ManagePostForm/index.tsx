import { Box, Button, TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PostItemProps } from "../PostItem";

export type FormValues = Omit<PostItemProps, "toggleEditMode" | "deletePost">;

interface ManagePostFormProps {
  defaultValues?: FormValues;
  onFormSubmit: (values: FormValues) => void;
}
export const ManagePostForm: FC<ManagePostFormProps> = ({
  defaultValues,
  onFormSubmit,
}) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      title: defaultValues?.title ?? "",
      content: defaultValues?.content ?? "",
      image_url: defaultValues?.image_url ?? "",
      lat: defaultValues?.lat ?? "",
      long: defaultValues?.long ?? "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (values, e) => {
    e?.preventDefault();
    onFormSubmit(values);
  };

  return (
    <Box
      p={4}
      width={"100%"}
      sx={{
        "& .MuiTextField-root": { mb: 2 },
      }}
    >
      <form data-cy="manage-post-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              label={"Title"}
              required
              fullWidth
              data-cy="title-input"
              {...field}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              maxRows={5}
              label="Content"
              data-cy="content-input"
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
            <TextField
              fullWidth
              label="Image URL"
              data-cy="image-url-input"
              {...field}
            />
          )}
        />
        <Controller
          name="lat"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type="number"
              label="Latitude"
              data-cy="lat-input"
              {...field}
            />
          )}
        />
        <Controller
          name="long"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type="number"
              label="Longitude"
              data-cy="long-input"
              {...field}
            />
          )}
        />
        <Button
          fullWidth
          variant="contained"
          data-cy="submit-button"
          type={"submit"}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

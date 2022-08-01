import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ToggleManagePost } from "../../features/ManagePost/hooks/useManagePost";

export interface PostItemProps {
  title: string;
  content: string;
  image_url?: string;
  lat?: string;
  long?: string;
  toggleEditMode: ToggleManagePost;
  deletePost: () => void;
}

export const PostItem: FC<PostItemProps> = ({
  title,
  image_url,
  content,
  toggleEditMode,
  deletePost,
  lat,
  long,
}) => (
  <Box mb={2} pb={1} data-cy={"post-item"}>
    <Card>
      {image_url && (
        <CardMedia
          component="img"
          alt={title}
          height="auto"
          image={image_url}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {lat && long && (
          <Stack overflow={'scroll'} direction={'row'} spacing={4} mb={2}>
            <Stack  direction={'row'} justifyContent={"flex-start"}>
              <Typography variant={"caption"} color={'text.secondary'}>Lat: </Typography>
              <Typography variant={"body2"}> {lat}</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={"flex-start"}>
              <Typography variant={"caption"} color={'text.secondary'}>Long: </Typography>
              <Typography variant={"body2"}> {long}</Typography>
            </Stack>
          </Stack>
        )}
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          data-cy={'edit-button'}
          onClick={() => {
            toggleEditMode();
          }}
        >
          Edit
        </Button>
        <Button
          data-cy={'delete-button'}
          variant="outlined" color="error"
          size="small"
          onClick={() => {
            deletePost();
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  </Box>
);

export default PostItem;

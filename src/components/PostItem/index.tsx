import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
}) => (
  <Box mb={2} pb={1}>
    <Card>
      <CardMedia component="img" alt={title} height="auto" image={image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            toggleEditMode();
          }}
        >
          Edit
        </Button>
        <Button
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

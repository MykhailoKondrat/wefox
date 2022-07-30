import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {FC} from 'react';

export interface PostItemProps  {
  title:string;
  description:string;
  image?:string;
}

export const PostItem: FC<PostItemProps> = ({title, image,description}) => (
  <Box mb={2} pb={1}>
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="auto"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  </Box>
);

export default PostItem

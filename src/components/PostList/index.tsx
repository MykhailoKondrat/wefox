import {ImageList, useMediaQuery} from '@mui/material';
import PostItem from "../PostItem";
import { FC } from "react";
import { Post } from "../../api/generated/postsApi";
import { useManagePost } from "../../features/ManagePost/hooks/useManagePost";
import {useDeletePostsByIdMutation} from '../../api';
import { useTheme } from '@mui/material/styles';
interface PostsListProps {
  posts: Array<Post>;
}
export const PostsList: FC<PostsListProps> = ({ posts }) => {
  const { handleToggleManagePost } = useManagePost();
  const [deletePost]=useDeletePostsByIdMutation()
  const theme= useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ImageList variant="masonry" cols={matchDownMd ? 1 : 2 } gap={8} component={"div"}>
      {posts.map((post) => (
        <PostItem
          title={post.title}
          content={post.content}
          image_url={post.image_url}
          toggleEditMode={() => {
            handleToggleManagePost({ postIdToUpdate: post.id });
          }}
          lat={post.lat}
          long={post.long}
          deletePost={() => {deletePost({id:post.id})}}
        />
      ))}
    </ImageList>
  );
};
export default PostsList;

import { ImageList } from "@mui/material";
import PostItem from "../PostItem";
import { FC } from "react";
import { Post } from "../../api/generated/postsApi";
import { useManagePost } from "../../features/ManagePost/hooks/useManagePost";

interface PostsListProps {
  posts: Array<Post>;
}
export const PostsList: FC<PostsListProps> = ({ posts }) => {
  const { handleToggleManagePost } = useManagePost();

  return (
    <ImageList variant="masonry" cols={3} gap={8} component={"div"}>
      {posts.map((post) => (
        <PostItem
          title={post.title}
          content={post.content}
          image_url={post.image_url}
          toggleEditMode={() => {
            handleToggleManagePost({ postIdToUpdate: post.id });
          }}
        />
      ))}
    </ImageList>
  );
};
export default PostsList;

import {
  ImageList,
} from "@mui/material";
import PostItem from '../PostItem';
import {FC} from 'react';
import {Post} from '../../api/generated/postsApi';

interface PostsListProps {
  posts: Array<Post>
}
export const PostsList:FC<PostsListProps> = ({ posts }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8} component={'div'}>
      {posts.map((post) => (
      <PostItem title={post.title} description={post.content} image={post.image_url}/>
      ))}
    </ImageList>
  );
};
export default PostsList;

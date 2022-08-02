import { FC } from "react";
import PostsList from "../../components/PostList";
import { useGetPostsQuery } from "../../api";
import {Alert, Box, CircularProgress} from '@mui/material';

export const Posts: FC = () => {
  const { data, isLoading, error } = useGetPostsQuery();
  if(error){
    return <Alert severity="error" >Something went wrong, connection to server. </Alert>;
  }
  if (data && data?.length === 0)
    return <Alert severity="info" data-cy="no-posts-info"> No Posts Found</Alert>;

  if (isLoading) return <Box width={0} mx={'auto'} data-cy="loader-spinner"><CircularProgress /></Box>

  if (data === undefined) return null;

  return <PostsList posts={data} />;
};
export default Posts;

import { FC } from "react";
import PostsList from "../../components/PostList";
import { useGetPostsQuery } from "../../api";
import {Alert, Box, CircularProgress} from '@mui/material';

export const Posts: FC = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (data && data?.length === 0)
    return <Alert severity="info"> No Posts Found</Alert>;

  if (isLoading) return <Box width={0} mx={'auto'}><CircularProgress /></Box>

  if (data === undefined) return null;

  return <PostsList posts={data} />;
};
export default Posts;

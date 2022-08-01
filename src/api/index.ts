import {postsApi} from './generated/postsApi';

export const index = postsApi.enhanceEndpoints({
  addTagTypes: ["Posts"],
  endpoints: {
    getPosts: { providesTags: ["Posts"] },
    postPosts: { invalidatesTags: ["Posts"] },
    putPostsById: { invalidatesTags: ["Posts"] },
    deletePostsById: { invalidatesTags: ["Posts"] },
  },
});

export const {
  usePutPostsByIdMutation,
  useDeletePostsByIdMutation,
  usePostPostsMutation,
  useGetPostsQuery,
} = index;

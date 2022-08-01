import { apiSlice as api } from "../apiSlice";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    putPostsById: build.mutation<PutPostsByIdApiResponse, PutPostsByIdApiArg>({
      query: (queryArg) => ({
        url: `posts/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deletePostsById: build.mutation<
      DeletePostsByIdApiResponse,
      DeletePostsByIdApiArg
    >({
      query: (queryArg) => ({ url: `posts/${queryArg.id}`, method: "DELETE" }),
    }),
    postPosts: build.mutation<PostPostsApiResponse, PostPostsApiArg>({
      query: (queryArg) => ({
        url: `posts/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: () => ({ url: `posts/` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as postsApi };
export type PutPostsByIdApiResponse = /** status 200 OK */ Post;
export type PutPostsByIdApiArg = {
  id: number;
  body: {
    title: string;
    content: string;
    lat?: string;
    long?: string;
    image_url?: string;
  };
};
export type DeletePostsByIdApiResponse = unknown;
export type DeletePostsByIdApiArg = {
  id: number;
};
export type PostPostsApiResponse = /** status 201 Location Created */ Post;
export type PostPostsApiArg = {
  body: {
    title: string;
    content: string;
    lat?: string;
    long?: string;
    image_url?: string;
  };
};
export type GetPostsApiResponse = /** status 200 OK */ Post[];
export type GetPostsApiArg = void;
export type Post = {
  title: string;
  content: string;
  lat?: string;
  long?: string;
  image_url?: string;
  id: number;
  updated_at?: string;
  created_at?: string;
};

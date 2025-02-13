// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

// Auto-generated hooks for endpoints
export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation } = api;
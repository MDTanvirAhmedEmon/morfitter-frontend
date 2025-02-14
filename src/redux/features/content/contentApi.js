import { baseApi } from "@/redux/api/baseApi";

const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContents: builder.query({
      query: (params) => ({
        url: "/content",
        method: "GET",
        params,
      }),
      providesTags: ['content']
    }),

    createContent: builder.mutation({
      query: (formData) => ({
        url: "/content/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ['content']
    }),

    getMyContent: builder.query({
      query: (params) => ({
        url: "/content/my-content",
        method: "GET",
        params
      }),
      providesTags: ['content']
    }),


    deleteContent: builder.mutation({
      query: (id) => ({
        url: `/content/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['content']
    }),

    likeAndDislike: builder.mutation({
      query: (data) => ({
        url: "/like/like-dislike",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['content']
    }),

    doComment: builder.mutation({
      query: (data) => ({
        url: "/comment/do-comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['comments']
    }),

    getAllComments: builder.query({
      query: (id) => ({
        url: `/comment/${id}`,
        method: "GET",
      }),
      providesTags: ['comments']
    }),

  }),
});

export const { useGetAllContentsQuery, useCreateContentMutation, useGetMyContentQuery, useDeleteContentMutation, useLikeAndDislikeMutation, useDoCommentMutation, useGetAllCommentsQuery } = contentApi;

export default contentApi;

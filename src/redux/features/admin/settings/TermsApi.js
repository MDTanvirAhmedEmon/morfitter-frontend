import { baseApi } from "@/redux/api/baseApi";

const TermsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTerms: builder.query({
            query: () => ({
                url: `/policy-term/terms`,
                method: 'GET',
            }),
            providesTags: ['terms']
        }),
        addTerms: builder.mutation({
            query: (data) => ({
                url: `/policy-term/create-terms`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['terms']
        }),
        updateTerms: builder.mutation({
            query: ({ id, data }) => ({
                url: `/policy-term/terms/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['terms']
        }),
    }),
});

export const {
    useGetTermsQuery,
    useAddTermsMutation,
    useUpdateTermsMutation,
} =
    TermsApi;

export default TermsApi;

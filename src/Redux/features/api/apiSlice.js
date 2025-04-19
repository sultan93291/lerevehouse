import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

const SiteURl = import.meta.env.VITE_SERVER_BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURl }),
  tagTypes: ["Trips"], // optional
  endpoints: builder => ({
    planTripRequest: builder.mutation({
      query: tripData => ({
        url: "/plan-trip",
        method: "POST",
        data: tripData,
      }),
    }),

    tripPackages: builder.query({
      query: id => ({
        url: `/trip-packages?country_id=${id}`,
        method: "GET",
      }),
    }),

    allPackages: builder.query({
      query: () => ({
        url: `/countries`,
        method: `GET`,
      }),
    }),

    getHomePageFaqData: builder.query({
      query: () => ({
        url: `/faq/all`,
        method: `GET`,
      }),
    }),

    sendQuery: builder.mutation({
      query: data => ({
        url: `/send-query`,
        method: "POST",
        data: data,
      }),
    }),

    planYourTrip: builder.mutation({
      query: data => ({
        url: `/plan-trip`,
        method: `POST`,
        data: data,
      }),
    }),
  }),
});

export const {
  usePlanTripRequestMutation,
  useTripPackagesQuery,
  useAllPackagesQuery,
  useGetHomePageFaqDataQuery,
  useSendQueryMutation,
} = apiSlice;

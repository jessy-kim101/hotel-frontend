import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { APIDomain } from '../../utilis/ApiDomain';
import type { RootState } from "../../app/store";


export type TIhotel = {
  hotel_id: string;
  name: string;
  address: string;
  contact_phone: string;
  location: string;
  category: string;
  rating: number;
  
}


export const hotelAPI = createApi({
  reducerPath:'hotelApi',
  baseQuery:fetchBaseQuery({
    baseUrl:APIDomain,
    prepareHeaders:(headers, {getState})=>{
      const token = (getState() as RootState).user.token;
      if(token){
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;

    }
  }),
  tagTypes:['Hotel'],
  endpoints:(builder) => ({
    getHotels: builder.query<TIhotel[], void>({
      query: () => '/hotels',
       //transformResponse: (response: { hotel: TIhotel[] }) => response.hotel,
      providesTags: ['Hotel'],
    }),
    getHotelById: builder.query<TIhotel, string>({
      query: (id) => `/hotels/${id}`,
      providesTags: (result, error, id) => [{ type: 'Hotel', id }],
    }),
    createCar: builder.mutation<TIhotel, FormData>({
  query: (formData) => ({
    url: '/hotels',
    method: 'POST',
    body: formData, // ✅ sends multipart/form-data correctly
  }),
  invalidatesTags: ['Hotel'],
}),

    updateCar: builder.mutation<TIhotel, Partial<TIhotel> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/hotels/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Hotel', id }],
    }),
    deleteCar: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/hotels/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Hotel'],
    }),
  }),
    

})

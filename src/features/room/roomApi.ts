import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from '../../utilis/ApiDomain';
import type { RootState } from "../../app/store";

// Define room type
export type TIroom = {
  room_id: number;
  hotel_id: number;
  room_type: string;
  price_per_night: number;
  capacity: number;
  amenities: string;
  is_available: boolean;
};

export const roomAPI = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIDomain}/rooms`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); // Fixed capitalization
      }
      headers.set('Content-Type', 'application/json'); // Added Content-Type header
      return headers;
    }
  }),
  tagTypes: ['Room'],
  endpoints: (builder) => ({
    // GET /rooms
    getRooms: builder.query<TIroom[], void>({
      query: () => '/',
      transformResponse: (response: { rooms: TIroom[] }) => response.rooms,
      providesTags: ['Room'],
    }),

    // GET /rooms/:id
    getRoomById: builder.query<TIroom, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Room', id }],
    }),

    // POST /rooms
    createRoom: builder.mutation<TIroom, FormData | Partial<TIroom>>({
      query: (roomData) => ({
        url: `/`,
        method: 'POST',
        body: roomData,
      }),
      invalidatesTags: ['Room'],
    }),

    // PUT /rooms/:id - Fixed the arrow function syntax
    updateRoom: builder.mutation<TIroom, Partial<TIroom> & { room_id: number }>({
      query: ({ room_id, ...patch }) => ({
        url: `/${room_id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { room_id }) => [{ type: 'Room', id: room_id }],
    }),

    // DELETE /rooms/:id
    deleteRoom: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Room'],
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetRoomByIdQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation
} = roomAPI;
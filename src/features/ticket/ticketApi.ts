import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from '../../utilis/ApiDomain';
import type { RootState } from "../../app/store";

// Define room type
export type TIticket = {
  ticket_id: number;
  user_id: number;
  subject: string;
  description: string;
  status: string;
  
};

export const ticketAPI = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIDomain}/ticket`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); // Fixed capitalization
      }
      headers.set('Content-Type', 'application/json'); // Added Content-Type header
      return headers;
    }
  }),
  tagTypes: ['Ticket'],
  endpoints: (builder) => ({
    // GET /ticket
    getTickets: builder.query<TIticket[], void>({
      query: () => '/',
     
      providesTags: ['Ticket'],
    }),

    // GET /rooms/:id
    getTicketById: builder.query<TIticket, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Ticket', id }],
    }),

    // POST /rooms
    createTicket: builder.mutation<TIticket, FormData | Partial<TIticket>>({
      query: (ticketData) => ({
        url: `/`,
        method: 'POST',
        body: ticketData,
      }),
      invalidatesTags: ['Ticket'],
    }),

    // PUT /rooms/:id - Fixed the arrow function syntax
    updateTicket: builder.mutation<TIticket, Partial<TIticket> & { ticket_id: number }>({
      query: ({ ticket_id, ...patch }) => ({
        url: `/${ticket_id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { ticket_id }) => [{ type: 'Ticket', id: ticket_id }],
    }),

    // DELETE /rooms/:id
    deleteTicket: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Ticket'],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketByIdQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation
} = ticketAPI;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from '../../utilis/ApiDomain';
import type { RootState } from "../../app/store";

// Define ticket type
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
    baseUrl: `${APIDomain}`, // ✅ FIXED: Removed trailing "/ticket"
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  tagTypes: ['Ticket'],
  endpoints: (builder) => ({
    // GET /ticket
    getTickets: builder.query<TIticket[], void>({
      query: () => '/ticket', // ✅ FIXED: Removed trailing "/ticket"
      providesTags: ['Ticket'],
    }),

    // GET /ticket/:id
    getTicketById: builder.query<TIticket, string>({
      query: (id) => `/ticket/${id}`,
      providesTags: (result, error, id) => [{ type: 'Ticket', id }],
    }),

    // POST /ticket
    createTicket: builder.mutation<TIticket, FormData | Partial<TIticket>>({
      query: (ticketData) => ({
        url: '/ticket',
        method: 'POST',
        body: ticketData,
      }),
      invalidatesTags: ['Ticket'],
    }),

    // PUT /ticket/:id
    updateTicket: builder.mutation<TIticket, Partial<TIticket> & { ticket_id: number }>({
      query: ({ ticket_id, ...patch }) => ({
        url: `/ticket/${ticket_id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { ticket_id }) => [{ type: 'Ticket', id: ticket_id }],
    }),

    // DELETE /ticket/:id
    deleteTicket: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/ticket/${id}`,
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

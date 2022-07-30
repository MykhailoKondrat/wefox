import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_API_URL} from '../config/env-config';

console.log(BASE_API_URL)
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: () => ({}),
})

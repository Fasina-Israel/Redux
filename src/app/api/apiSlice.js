import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logout } from '../../features/auth/authSlice';
import { headers } from 'next/headers';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://1a8f-105-113-106-168.ngrok-free.app/api/v1/auth',
    credentials: 'include',
    prepareHeaders:
        (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }

})

const baseQuerywithReauth = async (args, api, extraoptions) => {
    let result = await baseQuery(args, api, extraoptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')

        const refreshResult = await baseQuery('/refresh', api, extraoptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraoptions)
        } else {
            api.dispatch(logout())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQuerywithReauth,
    endpoints: builder => ({

    })
})
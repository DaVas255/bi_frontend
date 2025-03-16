'use client'

import { setupListeners } from '@reduxjs/toolkit/query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import { AppStore, makeStore } from './lib/store'

export function Providers({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    })
  )

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) storeRef.current = makeStore()

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={client}>
        {children}
        <Toaster
          position='bottom-left'
          reverseOrder={true}
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff'
            }
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

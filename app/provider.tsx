'use client'

import {NextUIProvider} from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";



const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <ChakraProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
      </ChakraProvider>
    </NextUIProvider>
  </QueryClientProvider>
}
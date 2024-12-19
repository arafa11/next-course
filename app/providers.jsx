'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children, ...props }) => {
  return (
    <NextThemesProvider attribute={'class'} {...props}>
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  )
}

export default Providers

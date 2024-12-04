'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers = ({ children, ...props }) => {
  return (
    <NextThemesProvider attribute={'class'} {...props}>
      {children}
    </NextThemesProvider>
  )
}

export default Providers

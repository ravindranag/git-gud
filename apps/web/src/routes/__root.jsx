import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { css } from '@/styled-system/css'
import Footer from '@/features/shared/components/Footer'
import Header from '@/features/shared/components/Header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    <Header />
      <main className={css({flexGrow: 1})}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

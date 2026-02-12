import { createContext, useContext, useState, type ReactNode } from 'react'

type PortfolioContextValue = {
  isProjectHovered: boolean
  setProjectHovered: (hovered: boolean) => void
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [isProjectHovered, setProjectHovered] = useState(false)
  return (
    <PortfolioContext.Provider value={{ isProjectHovered, setProjectHovered }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used within PortfolioProvider')
  return ctx
}

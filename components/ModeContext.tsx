'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Mode = 'web3' | 'web2'

interface ModeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
  isWeb3: boolean
  isWeb2: boolean
  accent: string
  accentBg: string
  accentBorder: string
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('web2')

  const value: ModeContextType = {
    mode,
    setMode,
    isWeb3: mode === 'web3',
    isWeb2: mode === 'web2',
    accent: mode === 'web3' ? 'text-lime' : 'text-teal',
    accentBg: mode === 'web3' ? 'bg-lime' : 'bg-teal',
    accentBorder: mode === 'web3' ? 'border-lime/15' : 'border-teal/15',
  }

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) throw new Error('useMode must be used within ModeProvider')
  return context
}

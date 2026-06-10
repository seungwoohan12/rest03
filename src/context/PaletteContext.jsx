import { createContext, useContext, useState, useEffect } from 'react'

export const palettes = [
  { id: 'sky',    label: 'Sky',    royal: '#2563EB', sky: '#7DD3FC' },
  { id: 'ocean',  label: 'Ocean',  royal: '#0891B2', sky: '#22D3EE' },
  { id: 'mint',   label: 'Mint',   royal: '#059669', sky: '#34D399' },
  { id: 'violet', label: 'Violet', royal: '#7C3AED', sky: '#A78BFA' },
  { id: 'rose',   label: 'Rose',   royal: '#DB2777', sky: '#F472B6' },
]

const PaletteContext = createContext()
export const usePalette = () => useContext(PaletteContext)

export function PaletteProvider({ children }) {
  const [paletteId, setPaletteId] = useState(
    () => localStorage.getItem('palette') || 'sky'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', paletteId)
    localStorage.setItem('palette', paletteId)
  }, [paletteId])

  return (
    <PaletteContext.Provider value={{ paletteId, setPaletteId, palettes }}>
      {children}
    </PaletteContext.Provider>
  )
}
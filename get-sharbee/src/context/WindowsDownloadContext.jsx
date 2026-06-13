import { createContext, useContext } from 'react'
import { useWindowsDownloadUrl } from '@/hooks/useWindowsDownloadUrl'

const WindowsDownloadContext = createContext(null)

export function WindowsDownloadProvider({ children }) {
  const value = useWindowsDownloadUrl()

  return (
    <WindowsDownloadContext.Provider value={value}>
      {children}
    </WindowsDownloadContext.Provider>
  )
}

export function useWindowsDownload() {
  const context = useContext(WindowsDownloadContext)

  if (!context) {
    throw new Error('useWindowsDownload must be used within WindowsDownloadProvider')
  }

  return context
}

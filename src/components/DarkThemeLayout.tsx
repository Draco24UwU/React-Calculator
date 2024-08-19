import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';

function DarkThemeLayout({children}: {children : React.ReactNode}) {
    
  const DarkMode = useSelector((state: RootState) => state.DarkMode.isOpen);

  return (
    <div className={`${DarkMode ? "dark" : ""}`}>{children}</div>
  )
}

export default DarkThemeLayout;
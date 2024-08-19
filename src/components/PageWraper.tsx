
function PageWraper({children}: {children : React.ReactNode}) {
  return (
    <main className={`Page-Wrapper ScrollBar Theme-Transition min-h-screen`}>{children}</main>
  )
}

export default PageWraper
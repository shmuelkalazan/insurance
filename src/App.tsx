import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Page from './components/pages/Page'

export default function App() {
  return (
    <div className='app'>
      <header>
        <Header/>
      </header>
      <aside>
        <Nav/>
      </aside>
      <main>
        <Page/>
      </main>
    </div>
  )
}

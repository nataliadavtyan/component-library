import React from 'react'
import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"

export default function App() {

  return (
      <>
        <h1>Component Library</h1>
          <Badges />
          <Banners />
          <Cards />
          <Testimonials />
      </>
  )
}

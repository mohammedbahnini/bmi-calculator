import { Features } from "./components/Features/Features"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Intro } from "./components/Intro/Intro"
import { Limitations } from "./components/Limitations/Limitations"

function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <Intro />
      <Features />
      <Limitations />
    </main>
    </>
  )
}

export default App

import './App.css'
import EventComponent from './components/EventComponent/EventComponent.jsx'
import Header from './components/Header/header.jsx'
import IntroComponent from './components/IntroComponent/IntroComponent.jsx'

function App() {

  return (
    <>
      <Header />
      <h1>Componente Principal</h1>

      <IntroComponent />
      <EventComponent />
    </>
  )
}

export default App

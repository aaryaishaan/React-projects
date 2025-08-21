// import './App.css'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import Hero from './components/Hero/Hero'
import Navigation from './components/Navigation/Navigation'

function App() {
  

  return (
    <>
    <Navigation/>
    <main className='main-container'>
    <Hero/>
    <ContactForm  />
    </main>
    </>
  )
}

export default App

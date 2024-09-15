import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h2 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind css</h2>
    <Card username="tisha" btnText="click me"/>
    <Card username="ziya" btnText="visit me" />
    </>
  )
}

export default App

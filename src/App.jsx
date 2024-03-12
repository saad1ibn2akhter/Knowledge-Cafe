import './App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/bookmarks.jsx'
import Header from './components/Header/Header.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='md:flex items-center mx-auto container p-3'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      {/* <h1 className='bg-red-300 text-6xl'>Knowledge Cafe</h1> */}
    </>
  )
}

export default App

// https://raw.githubusercontent.com/saad1ibn2akhter/fake-APi/main/fakedata.json   
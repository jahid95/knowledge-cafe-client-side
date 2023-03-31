
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Blogs></Blogs>
      <ToastContainer />
    </div>
  )
}

export default App

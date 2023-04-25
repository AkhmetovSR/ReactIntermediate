import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Item from './components/Item';
import Descriptions from './components/Descriptions';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {useForm} from 'react-hook-form'

function App() {
  return (
    <BrowserRouter>
      <div>
          <Header />
            <Routes>
              <Route path='/item' element={<Item />} />
              <Route path='/descriptions' element={<Descriptions />} />
              <Route path='/form' element={<Form />} />
            </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

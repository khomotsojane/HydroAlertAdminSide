import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Updates from './components/Updates';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Form" element={<Form/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Updates" element={<Updates/>}></Route>
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

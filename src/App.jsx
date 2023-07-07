import {RouterProvider } from 'react-router-dom'
import './App.css'
import Route from './Route/Route'

function App() {

  return (
    <div>
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App

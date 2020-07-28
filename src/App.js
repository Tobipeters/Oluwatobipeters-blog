import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav/Nav'
import MainRoutes from './routes/routes';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Blog />
      <MainRoutes />  
    </div>
  );
}

export default App;

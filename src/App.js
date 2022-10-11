import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Main from './Main/Main';
import Quizes from './Quizes/Quizes';
import Statistics from './Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: 'statistics',
          loader: ()=>{

          },
          element: <Statistics />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: '/quizes/:id',
          loader: ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element:<Quizes />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

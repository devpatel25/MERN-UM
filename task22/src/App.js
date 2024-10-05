import useFetch from './useFetch';
import React from 'react';

function App() {
  const {data, loading,error}=useFetch('https://dummyjson.com/products');
  if (loading) return <div className='fixed top-0 left-0 h-screen w-screen bg-white flex justify-center items-center'><p className='text-3xl font-bold'>Loading...</p></div>;
  if (error) return <div className='fixed top-0 left-0 h-screen w-screen bg-white flex justify-center items-center'><p className='text-3xl font-bold text-red-600 flex justify-center items-center flex-col'><img src="error.png" className='h-24'/> Error: {error}</p></div>;

  return (
    <div className="App">
      <ul className='flex flex-wrap h-auto w-screen gap-8 justify-center items-center p-8'>
        {data['products'].map((product) => (
          <li key={product.id} className='h-auto w-auto p-4 bg-slate-100 rounded-2xl hover:scale-105'>
            <img src={product.thumbnail} alt={product.title}/>
            <h2 className='text-l font-bold'>{product.title}</h2>
            <h4>${product.price}</h4>
          </li>

        ))}
        
      </ul>    
    </div>
  );
}

export default App;

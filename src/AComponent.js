import React from 'react'
import DataContext from './DataContext';
import BComponent from './BComponent';

const AComponent = () => {
    const Vishatnama = "mere grand children ko 4,00,000cr mai bhet swroop deta hoon ";
  return (
    <DataContext.Provider value={Vishatnama}>
    <div>
    AComponent
    <BComponent />
    </div>
    </DataContext.Provider>
  )
}

export default AComponent

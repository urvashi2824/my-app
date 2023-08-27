import React, { useContext } from 'react'
import DataContext from './DataContext'

const DComponent = () => {
    const shareddata = useContext(DataContext)
  return (
    <div>
      DComponent
      <p>Property Recived  From Grand parent:{shareddata}</p>
    </div>
  );
};

export default DComponent

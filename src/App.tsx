import React, {FC, ReactElement} from 'react';
import './App.css';
import dictionary from  './resources/dictionary.json'

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      {dictionary}
    </div>
  );
}

export default App;

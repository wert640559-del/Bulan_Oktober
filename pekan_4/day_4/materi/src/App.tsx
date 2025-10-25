import { FC } from 'react';
import UseRef from './components/UseRef';
import FocusInput from './components/FocusInput';
import PenghitungRahasia from './components/PenghitungRahasia';


const App: FC = () => {

  return (
    <div>
      <UseRef/>
      <FocusInput/>
      <PenghitungRahasia/>
    </div>
  );
};

export default App;
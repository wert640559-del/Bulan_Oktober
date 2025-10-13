
import './App.css'
import CounterWithReducer from './components/CounterWithReducer'
import KmMileConverter from './components/liftingStateUp/KmMileConverter'
import Utama from './components/propDrilling/Utama'
import InputUtama from './components/stateSharing/InputUtama'
import ThemedButton from './components/theme/ThemedButton'
import ThemedParagraph from './components/theme/ThemedParagraph'
import { ThemeProvider } from './context/ThemeContex'

function App() {
  

  return (
    <>
      {/* nomor 1 */}
      <KmMileConverter/>

      {/* nomor 2 */}
      <Utama/>

      {/* nomor 3 */}
      <InputUtama/>

      {/* nomor 4 */}
      <CounterWithReducer/>

      {/* nomor 5 */}
      <ThemeProvider>
        <h2>Ganti tema</h2>
        <ThemedButton/>
        <ThemedParagraph/>
      </ThemeProvider>
    </>
  )
}

export default App

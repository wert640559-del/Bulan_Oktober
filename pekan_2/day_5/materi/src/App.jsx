import Calculator from "./components/Calculator";
import CounterWithReducer from "./components/CounterWithReducer";
import ThemedButton from "./components/ThemeButton";
import ThemedParagraph from "./components/ThemeParagraph";
import { ThemeProvider } from "./contex/ThemeContex";

export default function App(){
  return (
    <div>
      <Calculator></Calculator>
      <CounterWithReducer/>

      <ThemeProvider>
        <ThemedButton/>
        <ThemedParagraph/>
      </ThemeProvider>
    </div>
  )
}
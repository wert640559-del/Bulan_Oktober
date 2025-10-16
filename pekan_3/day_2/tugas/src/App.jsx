import CounterToggleView from "./components/CounterToggleView";
import ModalToggle from "./components/ModalToggle";
import PostView from "./components/PostViewer";
import SwitchButton from "./components/SwitchButton";
import './App.css'
import FormView from "./components/FormView";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <div>
      <h1>Evaluasi Hari Kamis</h1>

      {/* nomor 1 */}
      <ModalToggle />
      <br/>
      <SwitchButton /><hr />

      {/* nomor 2 */}
      <PostView /><hr />

      {/* nomor 3  */}
      <CounterToggleView /><hr />

      {/* nomor 4 */}
      <FormView /><hr />

      {/* nomor 5 */}
      <ThemeSwitcher />
    </div>
  )
}
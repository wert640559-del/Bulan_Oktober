import ButtonClicker from "./components/ButtonClicker.jsx";
import LinkPreventer from "./components/LinkPreventer.jsx";
import NameForm from "./components/NameForm.jsx";

export default function App(){
  return (
    <div>
      <ButtonClicker/>     {/* contoh no 1 */}

      <LinkPreventer></LinkPreventer>

      <NameForm></NameForm>
      
    </div>
  )
}

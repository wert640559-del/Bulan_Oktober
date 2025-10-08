import ControlledComponents from "./components/ControlledComponents";
import EventHandlerSederhana from "./components/EventHandlerSederhana";
import FormulirPendaftaran from "./components/FormulirPendaftaran";
import SyntheticEvent from "./components/syntheticEvent";
import UncontrolledComponents from "./components/UncontrolledComponents";

export default function App(){
  return (
    <div >
      {/* nomor 1 */}
      <EventHandlerSederhana/>  

      {/* nomor 2 */}
      <SyntheticEvent></SyntheticEvent>

      {/* nomor 3 */}
      <ControlledComponents></ControlledComponents>

      {/* nomor 4 */}
      <UncontrolledComponents></UncontrolledComponents>

      {/* nomor 5 */}
      <FormulirPendaftaran></FormulirPendaftaran>

    </div>
  )
}
import IfElse from "./components/IfElseRendering";
import ProductList from "./components/RenderList";
import Switch from "./components/switchStatement";
import Ternary from "./components/Ternary&&Operator";

export default function App(){
  return (
    <div>
      
      <IfElse></IfElse>     {/* nomor 1 */}
      <Ternary></Ternary>   {/* nomor 2 */}
      <Switch></Switch>     {/* nomor 3 */}
      <ProductList/>        {/* nomor 4 dan 5 */}
    </div>
  )
}
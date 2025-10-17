import ParentComponent from './components/ReactMemo/ParentComponent'
import Product from './components/useMemo/Product'
import ShoppingCart from './components/useCallback/ShoppingCart'
import ComparisonExample from './components/ComparisonExample'
import './App.css'

export default function App() {
  return (
    <div>
      <ParentComponent />
      <Product />
      <ShoppingCart />
      <ComparisonExample/>
    </div>
  )
}
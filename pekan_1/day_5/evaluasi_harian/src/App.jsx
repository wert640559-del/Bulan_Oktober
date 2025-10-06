import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import UserProfile from "./components/userProfile";

export default function App(){
  return (
    <div>
      <Counter/>      {/* tugas 1 */}
      <UserProfile/>  {/* tugas 2 */}
      <ContactForm/>  {/* tugas 3 */}
      <TodoList/>
    </div>
  )
}
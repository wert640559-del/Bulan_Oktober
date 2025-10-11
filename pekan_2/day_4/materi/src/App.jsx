import AbortFetchComponent from "./components/AbortFetchComponent";
import AsyncAwaitInEffect from "./components/AsyncAwaitInEffect";
import AxiosDataComponent from "./components/Axios";
import FetchDataComponent from "./components/fetch";
import UserListManipulated from "./components/UserListManipulated";

export default function App() {
  return (
    <div>
      <div>
        {/* <AxiosDataComponent></AxiosDataComponent> */}
        {/* <FetchDataComponent/> */}
        {/* <AsyncAwaitInEffect/> */}
        {/* <AbortFetchComponent></AbortFetchComponent> */}
        <UserListManipulated/>
      </div>
    </div>
  )
}
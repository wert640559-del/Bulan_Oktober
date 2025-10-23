import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

// Boolean
const isLoading: boolean = true;

// Number
const count: number = 0;
const price: number = 99.99;

//String 
const username: string = "Muhammad Harits";
const message: string = `Hello World ${username}`

// Array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const names: Array<string> = ["Alice", "Ahmad", "Harits", "Muhammad", "Budi"];

// Tuple 
const person: [string, number] = ["Muhammad Harits", 20];

// Enum (membuat pilihan)
enum Status {
  Aktif = "Kamu sedang aktif",
  Nonaktif = "Kamu sedang tidak aktif",
}

enum keadaan {
  hidup = "Kamu sedang hidup",
  mati = "Kamu telah mati",
}

// Any (hindari penggunaan kecuali sangat diperlukan)
let data: any = "could be anything"

// interface 
interface user {
  nama: string;
  umur: number;
  alamat: string;
}

const user: user = {
  nama: "Muhammad Harits",
  umur: 20,
  alamat: "Bekasi",
}

const user2: user = {
  nama: "Muhammad Harits",
  umur: 20,
  alamat: "Bekasi",
}


export default function App() {
  return (
    <div>
      <h1>{username}</h1>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>

      <p>{Status.Nonaktif}</p>
      <p>{keadaan.mati}</p>

      <Counter/>

      <UserProfile/>
    </div>
  )
}


import Level1 from "./Level1"

export default function Utama() {
    const user = {
        name: "Muhammad Harits",
        role: "Programmer"
    }

    return (
        <div>
            <h2>Prop Drilling</h2>
            <Level1 user={user}/>
        </div>
    )
}
import Level2 from "./Level2";

export default function Level1({ user }){
    return (
        <div>
            <h3>Level 1 (meneruskan props)</h3>
            <Level2 user={user}/>
        </div>
    )
}
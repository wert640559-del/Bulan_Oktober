import Level3 from "./Level3";

export default function Level2({user}){
    return (
        <div>
            <h4>Level 2 (meneruskan props lagi)</h4>
            <Level3 user={user}/>
        </div>
    )
}
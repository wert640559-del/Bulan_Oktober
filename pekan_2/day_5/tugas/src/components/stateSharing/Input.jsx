export default function Input({ text, onTextChange }){
    return (
        <div>
            <h4>Input:</h4>
            <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} placeholder="ketikkan sesuatu"/>
        </div>
    )
}
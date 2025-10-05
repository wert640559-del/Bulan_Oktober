import style from './Button.module.css'

function MyButton({type, children, onClick}){
    const buttonClass = `${style.button} ${type === 'primary'? style.primary : style.default}`

    return (
        <button className={buttonClass} onClick={onClick = () => alert("Saya sudah mengerjakan tugas nomor 3")}>
            {children}
        </button>
    )
}

export default MyButton;
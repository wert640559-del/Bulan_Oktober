import styles from './Button.module.css'

function MyButton({type, children, onClick}){
    const buttonClass = `${styles.button} ${type === 'primary' ? styles.primary : ''}`

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    )
}

export default MyButton;


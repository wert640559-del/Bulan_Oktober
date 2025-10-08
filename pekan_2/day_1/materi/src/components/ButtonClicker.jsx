export default function ButtonClicker(){
    const handleClick = () => {
        alert(
            'tombol di klik!'
        );
    };

    const handleMouseEnter = () => {
        console.log('Mouse masuk dari area tombol!')
    }
    
    const handleMouseLeave = () => {
        console.log('mouse keluar dari area tombol')
    }
    return (

        <div>
            <h2>Even Handler Sederhana</h2>
            <button
                onClick={handleClick} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{padding: '10px 20px', fontSize: '1em', cursor: 'pointer'}}
            >   
                Klik atau arahkan mouse
            </button>
        </div>
    )
}
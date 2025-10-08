export default function LinkPreventer() {
    const handleClick = (event) => {
        event.preventDefault();
        console.log('LInk diklik, tapi navigasi dicegah')
        alert('anda mencoba mengklik link, tapi saya mencegahnya!')
    }

    const handleInputChange = (event) => {
        console.log('nilai input: ', event.target.value)
    }


    return (
        <div>
            <h2>SyntheticEvent Objects</h2>
            <a href="https://wwww.google.com" onClick={handleClick}>klik saya (Navigasi dicegah)</a>
            <br /><br />
            <input type="text" onChange={handleInputChange} placeholder="Ketik sesuatu"/>
        </div>
    )
}
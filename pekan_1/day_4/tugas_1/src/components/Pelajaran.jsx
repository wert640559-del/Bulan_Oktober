import './Pelajaran.css'

function PelajaranToday(){
    return (
    <div className='container'>
        <h2 className='title'>Pelajaran Hari ini</h2>
        <h4 className='judul'>Styling dalam react</h4>
        <ul className='list'>
            <li><span className='li'>inline styles dalam react</span></li>
            <li><span className='li'>CSS classes dan className</span></li>
            <li><span className='li'>CSS Modules Introduction</span></li>
            <li><span className='li'>Dynamic styling dengan Props</span></li>
            <li><span className='li'>Responsive Design dalam React</span></li>
        </ul>
    </div>
    )
}

export default PelajaranToday;
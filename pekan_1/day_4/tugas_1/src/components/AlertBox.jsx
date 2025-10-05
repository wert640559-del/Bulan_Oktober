import style from './AlertBox.module.css'
function AlertBox({status, title, content, pesan}){
    const getStatusClass = () => {
        switch (status) {
            case 'success':
                return style.success;
            case 'error':
                return style.error;
            case 'warning':
                return style.warning;
            default:
                return '';
        }
    }
    return (
        <div className={style.card}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.content}>{content}</p>
            {/* <span className={`${style.status} ${getStatusClass()}`}>{pesan}</span> */}
            <button onClick={() => {
                switch (status) {
                    case 'success':
                        alert('Selamat, anda mendapatkan nilai 100')
                        break;
                    case 'error':
                        prompt('Maaf, Nilai anda terlalu tinggi untuk diinput, berikan komentar anda')
                        break;
                    case 'warning':
                        alert('Nilai anda terlalu tinggi')
                        break;
                    default:
                        break;
                }
            }
             } className={`${style.status} ${getStatusClass()}`}>Lihat</button>
        </div>
    )
}

export default AlertBox;
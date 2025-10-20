import { useNavigate } from 'react-router-dom'

export default function DashboardButton() {
    const navigate = useNavigate();

    const handleGoToHomeAndReplace = () => {
        navigate('/', {replace: true})
    }

    const handleGoToDashboard = () => {
        navigate('/dashboard')
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return(
    <div>
        <button onClick={handleGoToHomeAndReplace}>Pergi ke halaman Beranda</button>
        <button onClick={handleGoToDashboard}>Pergi ke halaman Dashboard</button>
        <button onClick={handleGoBack}>Pergi ke halaman Kembali</button>
    </div>
    )
}
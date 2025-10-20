import CurrentLocationInfo from "../components/CurrentLocationInfo";
import DashboardButton from "../components/DashboardButton";

export default function Home() {
    return (
        <div>
            <h1>Ini adalah halaman Utama</h1>
            <DashboardButton/>
            <CurrentLocationInfo />

            <button onClick={handleClick}></button>
        </div>
    )
}
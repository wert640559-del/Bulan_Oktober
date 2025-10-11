import { useEffect, useState } from "react"
import axios from "axios"

export default function QuranSurahList() {
  const [ayat, setAyat] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        // Ambil data surah Al-Fatihah
        const response = await axios.get("https://api.alquran.cloud/v1/surah/2")
        const surahData = response.data.data

        // Manipulasi data — ambil array ayat
        const processedAyat = surahData.ayahs.map(ayah => ({
          id: ayah.number,
          text: ayah.text,
          numberInSurah: ayah.numberInSurah,
          surahName: surahData.name,
          englishName: surahData.englishName,
        }))

        setAyat(processedAyat)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchSurah()
  }, [])

  if (loading) return <p>Sedang memuat...</p>
  if (error) return <p>Terjadi kesalahan: {error.message}</p>
  if (ayat.length === 0) return <p>Tidak ada ayat ditemukan.</p>

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>
        {ayat[0].surahName} ({ayat[0].englishName})
      </h2>
      <ul>
        {ayat.map(ayah => (
          <li
            key={ayah.id}
          >
            <span>
              {ayah.numberInSurah}.
            </span>{" "}
            {ayah.text}
          </li>
        ))}
      </ul>
      
    </div>
  )
}

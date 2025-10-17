import { useCallback, useEffect, useMemo, useState } from "react";

export default function ComparisonExample() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const expensiveCalculation = useMemo(() => {
        console.log('useMemo: Menghitung nilai mahal...')
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += count;
        } 
        return result;
    }, [count])

    const handleClick = useCallback(() => {
        console.log(' useCallback: Tombol diklik')
        setCount(prev => prev + 1)
    }, [])

    useEffect(() => {
    console.log('🌐 useEffect: Melakukan API call...');
    // Simulasi API call
    setTimeout(() => {
      setData([{ id: 1, name: 'Data dari API' }]);
    }, 1000);
  }, []); // Hanya jalankan sekali saat komponen mount

  // useEffect lain untuk side effect yang bergantung pada count
  useEffect(() => {
    console.log('📊 useEffect: Count berubah menjadi', count);
    // Side effect yang bergantung pada count
  }, [count]);

    return (
        <div>
            <h2>Perbedaan useMemo, useCallback, dan useEffect</h2>

            <div>
                <input 
                    type="text" 
                    name="" 
                    id=""
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ketik sesuatu untuk trigger re-render"
                    style={{ width: '300px', padding: '8px' }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ border: '1px solid #ccc', padding: '15px' }}>
                    <h3>useMemo - Memoize Nilai</h3>
                    <p>Count: {count}</p>
                    <p>Hasil perhitungan mahal: {expensiveCalculation}</p>
                    <p style={{ fontSize: '12px', color: 'gray' }}>
                        Perhitungan hanya dijalankan ulang jika count berubah
                    </p>
                </div>

                <div style={{ border: '1px solid #ccc', padding: '15px' }}>
                    <h3>useCallback - Memoize Fungsi</h3>
                    <button onClick={handleClick}>
                        Tambah Count (Callback di-memoize)
                    </button>
                    <p style={{ fontSize: '12px', color: 'gray' }}>
                        💡 Fungsi tidak dibuat ulang, mencegah re-render anak
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
                <h3>useEffect - Side Effects</h3>
                <p> Data dari API: {data.length > 0 ? data[0].name : "loading..."}</p>
                <p style={{ fontSize: '12px', color: 'gray' }}>
                    useEffect untuk API calls, subscriptions, DOM manipulation
                </p>
            </div>

            <div>
                <h3>Ringkasan Perbedaan:</h3>
                <ul>
                    <li><strong>useMemo: </strong> "Saya ingin mengingat hasil perhitungan ini"</li>
                    <li><strong>useCallback: </strong> "Saya ingin mengingat fungsi ini"</li>
                    <li><strong>useEffect: </strong> "Saya ingin melakukan sesuatu setelah render"</li>
                </ul>
            </div>
        </div>
    )
}
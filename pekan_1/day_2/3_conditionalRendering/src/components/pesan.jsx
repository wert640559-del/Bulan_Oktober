function KirimPesanan(props){
    const pesananMenunggu = props.pesananMenunggu;
    return (
    <div>
        {pesananMenunggu.length > 0 && 
            <h2>
                Anda memiliki {pesananMenunggu.length} pesanan yang belum dibuat
            </h2>
        }
    </div>
    )
}
export default KirimPesanan;

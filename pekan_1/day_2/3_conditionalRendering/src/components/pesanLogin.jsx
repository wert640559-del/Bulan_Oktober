function SapaUser(props){
    return <h1>Selamat Datang Kembali!</h1>;
}

function PesanLogin(props){
    return <h1>Silahkan Login</h1>
}

function Sapa(props){
    const jikaLogin = props.jikaLogin;
    if(jikaLogin){
        return <SapaUser/>
    } 
    return <PesanLogin/>
}

export default Sapa;
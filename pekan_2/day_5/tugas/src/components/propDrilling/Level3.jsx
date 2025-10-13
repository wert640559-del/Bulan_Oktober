export default function Level3({ user }){
    return(
        <div>
            <h5>Level 3 (menggunakan props)</h5>
            <p>Nama: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    )
   
}
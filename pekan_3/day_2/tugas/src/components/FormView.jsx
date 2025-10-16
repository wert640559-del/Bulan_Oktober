import useForm from "../hooks/useForm";

export default function FormView() {
    const { values, handleChange, resetForm } = useForm({
        name: '',
        email: '',
    })

    return (
        <div>
            <h2>Form Data</h2>
            <form action="">
                <div>
                    <label htmlFor="">Nama:</label><br />
                    <input 
                        type="text" 
                        name="name" 
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama"
                    />
                </div>

                <div>
                    <label htmlFor="">Email: </label><br />
                    <input 
                        type="text" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Masukkan Email"
                    />
                </div>

                <button type="button" onClick={resetForm}>Reset</button>
            </form>

            <br />

            <div>
                <h3>Data Real-time:</h3>
                <p><strong>Nama: </strong> {values.name || "-"}</p>
                <p><strong>Email: </strong> {values.email || "-"}</p>
            </div>
        </div>
    )
}
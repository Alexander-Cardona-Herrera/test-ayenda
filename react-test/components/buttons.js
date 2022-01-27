export default function Buttons({ name, setName }) {


    const handleclick = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="d-flex row py-2 justify-content-center">
            <button className="btn btn-spider col-4 col-md-2 m-2 border" onClick={handleclick} value="Spider-Man (Peter Parker)">Spider-Man</button>
            <button className="btn btn-wolver col-4 col-md-2 m-2 border" onClick={handleclick} value="Wolverine">Wolverine</button>
            <button className="btn btn-hulk col-4 col-md-2 m-2 border" onClick={handleclick} value="Hulk (Ultimate)">Hulk</button>
            <button className="btn btn-thor col-4 col-md-2 m-2 border" onClick={handleclick} value="Thor (Ultimate)">Thor</button>
        </div>
    )
}
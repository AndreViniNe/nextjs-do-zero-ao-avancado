import { useParams } from "react-router"

export default function Product() {
    const { id } = useParams();
    return(

        <div>
            <h1>Grade de produtos</h1><br/>
            <span>Product ID selecionado: {id}</span>
        </div>
    )
}
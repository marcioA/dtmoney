import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable(){

    useEffect(()=> {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Loja AC - Manas</td>
                        <td className="deposit">R$150,00</td>
                        <td>Recibeis</td>
                        <td>09/08/2021</td>
                    </tr>

                    <tr>
                        <td>Mercado</td>
                        <td className="withdraw">-R$12,00</td>
                        <td>Compras</td>
                        <td>09/08/2021</td>
                    </tr>                   
                </tbody>
            </table>
        </Container>
    )
}
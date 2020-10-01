import React, { Component } from 'react';
import './tabela.scss'

export default class Tabela extends Component {

    render() {
        const { users } = this.props
        
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Peso</th>
                            <th>Altura</th>
                            <th>IMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ? (
                                users.map((user, index) => {
                                    let { nome, peso, altura } = user
                                    let IMC = (peso / (altura * altura)).toFixed(2)
                                    if (IMC === "NaN") {
                                        IMC = ""
                                    }
                                    return (
                                        <tr key={index} index={index} onDoubleClick ={(td) => this.props.handleDelete(td)}>
                                            <td>{nome}</td>
                                            <td>{peso}</td>
                                            <td>{altura}</td>
                                            <td>{IMC}</td>
                                        </tr>
                                    )
                                })

                            ) : (null)
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

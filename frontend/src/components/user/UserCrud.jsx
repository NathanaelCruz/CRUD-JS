import React, { Component } from "react"
import Main from "../templates/Main"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir"
}

export default class UserCrud extends Component {
    render () {
        return (
            <Main {...headerProps}>
<<<<<<< HEAD
                Cadastro de Usuário
=======
                Cadastro de Usuario
>>>>>>> 594aa0b4f6b64b6979d752d2900f1ce322f80d41
            </Main>
        )
        
    }
}
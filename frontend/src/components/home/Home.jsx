import React from "react"
import Main from "../templates/Main"

const home = props => 
    <Main icon="home" title="Início" subtitle="Segundo projeto no capítulo do React" >
        <div className="display-4">Bem-vindo</div>
        <hr/>
        <p className="mb-0">Sistema criado para exemplificar um cadastro desenvolvido em REACT JS</p>
    </Main>

export default home
import styled from "styled-components";
import { Dropdown } from './Dropdown';
import InputLabel from './InputLabel';
import { Button } from "./Button";
import { useState } from "react";

const FormComponentContainer = styled.section`
display: flex;
justify-content:center;
margin: 80px 0;
`
const FormAction = styled.form`
max-width: 80%;
background-color: #F2F2F2;
border-radius: 20px;
padding: 36px 64px;
box-shadow: 8px 8px 16px rgba(0,0,0,0.08);
`

export const FormComponent = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
      ]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const getSubmit = (event) => {
        event.preventDefault()
        console.log('Form was actived',nome, cargo, imagem, time);
    }
    return (
        <FormComponentContainer>
            <FormAction onSubmit={getSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputLabel value={nome} aoAlterado={valor => setNome(valor)} required={true} label="Nome:" placeholder={"Digite o seu nome"}/>
                <InputLabel value={cargo} aoAlterado={valor => setCargo(valor)} required={true} label="Cargo:" placeholder={"Digite o seu cargo"}/>
                <InputLabel value={imagem} aoAlterado={valor => setImagem(valor)}required={false} label="Imagem:" placeholder={"Informe o endereço da imagem"}/>
                <Dropdown label={"Time:"} itens={times} value={time} aoAlterado={valor => setTime(valor    )}/>
                <Button>Criar card</Button>
            </FormAction>
        </FormComponentContainer>
    )
}
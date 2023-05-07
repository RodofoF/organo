import styled from "styled-components";
import { Dropdown } from './Dropdown';
import InputLabel from './InputLabel';
import { Button } from "./Button";

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
    return (
        <FormComponentContainer>
            <FormAction>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputLabel label="Nome:" placeholder={"Digite o seu nome"}/>
                <InputLabel label="Cargo:" placeholder={"Digite o seu cargo"}/>
                <InputLabel label="Imagem:" placeholder={"Informe o endereço da imagem"}/>
                <Dropdown label={"Time:"} itens={times}/>
                <Button>Criar card</Button>
            </FormAction>
        </FormComponentContainer>
    )
}
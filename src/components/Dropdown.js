import styled from "styled-components";

const DropdownContainer = styled.div`
    margin: 24px 0;
    display:flex;
    flex-direction: column;

    .select {
        background-color: #FFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0.06);
        width: 100%;
        border: none;
        font-size: 24px;
        padding: 24px;
        box-sizing: border-box;
    }
    
`
const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;



`
const SelectOption = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`
export const Dropdown = (props) => {
    const getDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <DropdownContainer>
            <Label htmlFor="">{props.label}</Label>
            <select onChange={getDigitado} value={props.value} className="select" name="" id="">
                {props.itens.map(item => {
                   return <option key={item}>{item}</option>
                })}
            </select>
        </DropdownContainer>
    )
}
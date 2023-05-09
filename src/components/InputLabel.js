import styled from "styled-components";

const InputLabelContainer = styled.div`
    margin: 24px 0;
    display:flex;
    flex-direction: column;
    
`
const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;

`
const Input = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`



const InputLabel = (props) =>{
    

    const getDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    return (
        <InputLabelContainer>
            <Label htmlFor="">{props.label}</Label>
                
                <Input value={props.valor} onChange={getDigitado} type="text" name="" id="" required={props.required} placeholder={props.placeholder}/>
            
        </InputLabelContainer>
    )
}
export default InputLabel
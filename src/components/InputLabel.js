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


const InputLabel = ({label, placeholder }) =>{
    return (
        <InputLabelContainer>
            <Label htmlFor="">{label}</Label>
                
                <Input type="text" name="" id="" placeholder={placeholder}/>
            
        </InputLabelContainer>
    )
}
export default InputLabel
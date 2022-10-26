import { Form, FormContainer, Input, SendButton, StyledLabel } from "../TelaCadastro/styled";
import TelaUsuarioCadastrado from "../TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

export function TelaCadastroEndereço(props) {
    return (
        <FormContainer>
            <h1>Cadastro de Endereço</h1>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input id="endereco" />
                </StyledLabel>
                <StyledLabel htmlFor="nResidencia">
                    Nº da Residência:
                    <Input Number id="nResidencia" />
                </StyledLabel>
                <StyledLabel htmlFor="nTelefone">
                    Nº Telefone:
                    <Input Number id="nTelefone" />
                </StyledLabel>
                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Proxima Pagina</SendButton>
            </Form>
        </FormContainer>
    )
}

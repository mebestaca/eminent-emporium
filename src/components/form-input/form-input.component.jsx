import { FormInputLabel, Input, Group } from "./form-input.style";

const FormInput = ({label, inputOptions}) => {
    return (
        <Group>
            <Input { ...inputOptions } />
            <FormInputLabel shrink={inputOptions.value.length}>
                { label }
            </FormInputLabel>
        </Group>
    );
}

export default FormInput;
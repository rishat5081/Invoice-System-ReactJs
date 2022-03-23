import { useFormWithYup } from "hooks";

import { Input, SubmitButton } from "components";
import { schema, fields } from "./validations";
import * as S from "./styles";

const CreateNewSupplier = () => {
  const { register, handleSubmit, errors } = useFormWithYup(schema);

  const onSubmit = (data) => {
    // do whatever you want with data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Note>Fields are for demonstration purpose only, will be change on final product</S.Note>
      {fields.map(({ name, label, ...rest }) => (
        <Input
          key={name}
          label={label}
          error={errors[name]?.message}
          {...rest}
          {...register(name)}
        />
      ))}
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};

export default CreateNewSupplier;

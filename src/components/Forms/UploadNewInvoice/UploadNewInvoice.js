import { Fragment, useContext, useState } from "react";
import { Controller } from "react-hook-form";
import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select } from "components";
import { capitalize } from "utils";
import { schema, fields } from "./validations";
import { ModalContext } from "store/modalContext";
import { FileUploader } from "react-drag-drop-files";

const CreateNewInvoice = ({ onAddInvoice }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const fileTypes = ["CSV", "XLX", "XLXS"];

  const onSubmit = (data) => {
    console.log("================");
    const { attachment } = data;

    console.log(attachment);

    const input = attachment[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const { headers, rowsInfo } = convertData_Array(event.target.result);
      console.log("event :", event);
      console.log("-==== headers ", headers);
      console.log("-==== rowsInfo ", rowsInfo);
    };
    reader.readAsText(input);
    // onAddInvoice({
    //   col1: supplierName,
    //   col2: "ACV Gummies",
    //   col3: "Invoice",
    //   col4: "105",
    //   col5: "dueDate",
    //   col6: `$invoiceAmount}`,
    //   col7: `$paidAmount}`,
    //   col8: "status",
    //   col9: attachment[0]?.name || "No file uploaded",
    //   col10: "See notes",
    // });
    // onHide();
  };

  return (
    <>
      <div className="App">
        <h1>Hello To Drag & Drop Files</h1>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
      </div>
    </>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {fields.map(({ name, label, type, ...rest }) => (
    //     <Fragment key={name}>
    //       {type === "select" ? (
    //         <Controller
    //           control={control}
    //           name={name}
    //           render={({
    //             field: { onChange, value },
    //             fieldState: { error },
    //           }) => (
    //             <Select
    //               value={value}
    //               label={label}
    //               onChange={onChange}
    //               error={error}
    //               {...rest}
    //             />
    //           )}
    //         />
    //       ) : (
    //         <Input
    //           key={name}
    //           label={label}
    //           error={errors[name]?.message}
    //           type={type}
    //           {...register(name)}
    //           {...rest}
    //         />
    //       )}
    //     </Fragment>
    //   ))}
    //   <SubmitButton>Create</SubmitButton>
    // </form>
  );
};

export default CreateNewInvoice;

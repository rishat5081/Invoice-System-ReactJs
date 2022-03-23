import ReactSelect from "react-select";

import { getColourStyles } from "constants/components/select";

const Select = ({ options, placeholder, height, width, custom }) => {
  const colourStyles = getColourStyles({ height, width, ...custom });

  return <ReactSelect placeholder={placeholder} options={options} styles={colourStyles} />;
};

export default Select;

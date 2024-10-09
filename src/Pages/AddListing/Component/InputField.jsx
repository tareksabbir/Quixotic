/* eslint-disable react/prop-types */
import { Input } from "../../../components/ui/input";

const InputField = ({ item }) => {
  return (
    <>
      <div>
        <Input name={item?.name}></Input>
      </div>
    </>
  );
};

export default InputField;

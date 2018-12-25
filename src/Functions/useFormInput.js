import {useState} from 'react';

const useFormInput = (initValue = '') => {
  let [value, setValue] = useState(initValue);

  const onChange = (e) => setValue(e.target.value);

  return {
    value,
    onChange,
    setValue
  }
}

export default useFormInput;

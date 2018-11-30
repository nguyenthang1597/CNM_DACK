import {useState} from 'react';

const useFormInput = () => {
  let [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);

  return {
    value,
    onChange
  }
}

export default useFormInput;
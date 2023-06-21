import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ReactDatePickerProps {
  name: string;
  initialValue?: Date;
}

const DatePickerField: React.FC<ReactDatePickerProps> = ({
  name = 'date',
  initialValue,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const selectedDate = field.value
    ? new Date(field.value)
    : initialValue || null;

  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={selectedDate}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;

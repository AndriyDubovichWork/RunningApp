import React, { useState } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
// import * as DatePicker from 'react-native-date-picker';
const DatePicker = require('react-native-date-picker').default;

const AddResoults = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Andriy', value: 'Andriy' },
    { label: 'Ivan', value: 'Ivan' },
  ]);

  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <DatePicker date={date} mode='datetime' />
      <Input maxLength={4} placeholder='laps' keyboardType={'decimal-pad'} />
      <Input maxLength={4} placeholder='km' keyboardType={'decimal-pad'} />
      <Input
        maxLength={4}
        placeholder='pull ups'
        keyboardType={'decimal-pad'}
      />
      <Button title='save resoults' onPress={() => {}} />
    </SafeAreaView>
  );
};

export default AddResoults;

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const communesList = [
    { value: 'Santiago', label: 'Santiago' },
    { value: 'Peñaflor', label: 'Peñaflor' },
    { value: 'La Florida', label: 'La Florida' },
    { value: 'San Miguel', label: 'San Miguel' }
]

const animatedComponents = makeAnimated();

 const Multi_sect = () => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[communesList[4], communesList[5]]}
      isMulti
      options={communesList}
    />
  );
}

export default Multi_sect;
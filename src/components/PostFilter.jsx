import React from 'react'
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          plaseholder="Поиск..."
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue= "сортировка по"
          options={[
            {value: 'title', name: 'по названию'},
            {value: 'body', name: 'по описанию'}
          ]}
        />
      </div>
  )
}


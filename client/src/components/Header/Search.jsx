
import React, { useState } from "react";

import { AutoComplete, Input } from 'antd';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function Search() {
   // for Search & Auto-complete
   const [options, setOptions] = useState([]);
   const handleSearch = (value) => {
     setOptions(value ? searchResult(value) : []);
   };
   const onSelect = (value) => {
     console.log('onSelect', value);
   };


   const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

   const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

  return (
    <div >
       
       {/* <input className="w-96  py-2.5 px-10 focus:outline-none "
          placeholder="I'm Shopping for "
          title='Search bar'
        /> */}
          {/* <AutoComplete
        options={options}
        className="w-96  py-5 px-10 focus:outline-none border-0 "
          placeholder="I'm Shopping for "
          title='Search bar'
       
        onSearch={(text) => setOptions(getPanelValue(text))}
        // placeholder="Customized clear icon"
        allowClear={{
          clearIcon: <CloseSquareFilled />,
        }} /> */}
      <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 500,
       
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" 
      style={ {
        padding: '0px',
       
    
      }}
       className="w-[500px]  py-5 px-10 focus:outline-none border-0 "
          placeholder="I'm Shopping for .... "
          title='Search bar'
     enterButton />
    </AutoComplete>

        {/* <button className="bg-yellow-500 py-2.5 px-7 text-slate-800  font-semibold focus:ring-none  ">Search</button> */}
      
      {/* <input type="search"> </input> */}
    </div>
  );
}

export default Search;

import React from 'react';
import { InputText } from 'primereact/inputtext';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    const currentTime = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      });
  return (
    <div className='Up'>
      <div className='Search'>
        <div className="p-input-icon-right">
          <InputText
            placeholder="Search"
            className="custom-input"
            style={{ borderRadius: '30px' ,backgroundColor:'#F0F3F4',width:'300px'}}
          />
          <SearchIcon />
        </div>
      </div>
      <div className='Time'>        
        <span style={{color:'gray'}}>{currentTime}</span> 
      </div>
    </div>
  );
}

export default Search;

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton ,Box } from '@mui/material';
import "./SearchBar.css" ;
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Box
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: '10px'},
        display:'flex',
        justifyContent:"flex-start",
        width: {  sm: '30%'  },
        backgroundColor:'white',
      
      }}
    >
      <input 
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '5px', color: 'red' ,
      
      
       }} aria-label='search'>
        <SearchIcon  />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
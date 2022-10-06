import { toast } from 'react-toastify';
import { Header, Form, Input, Button } from './Searchbar.styled';
import React from 'react';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [searchImages, setSearchImages] = useState('');
  const handleNameChange = e => {
    const { value } = e.target;
    setSearchImages(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchImages.trim() === '') {
      toast.warn('Enter a valid name');
    }
    onSubmit(searchImages);
    setSearchImages('');
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleNameChange}
          name="searchImages"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImages}
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>
    </Header>
  );
}

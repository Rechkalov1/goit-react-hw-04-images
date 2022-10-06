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

// export default class Searchbar extends Component {
//   state = {
//     searchImages: '',
//   };

//   handleNameChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchImages.trim() === '') {
//       toast.warn('Enter a valid name');
//     }
//     this.props.onSubmit(this.state.searchImages);
//     this.setState({ searchImages: '' });
//   };

//   render() {
//     return (
//       <Header>
//         <Form onSubmit={this.handleSubmit}>
//           <Input
//             onChange={this.handleNameChange}
//             name="searchImages"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchImages}
//           />
//           <Button type="submit">
//             <span>Search</span>
//           </Button>
//         </Form>
//       </Header>
//     );
//   }
// }

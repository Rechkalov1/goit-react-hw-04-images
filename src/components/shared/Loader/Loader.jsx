import { ThreeDots } from 'react-loader-spinner';
import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
export class Loader extends Component {
  render() {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#202eec"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}

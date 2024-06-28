import css from './Loader.module.css'
import { ThreeDots } from 'react-loader-spinner' 

export default function Loader() { 
  return (
    <div className={css.container}>
      <ThreeDots
  visible={true}
  height="50"
  width="50"
  color="#ff0000"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
}


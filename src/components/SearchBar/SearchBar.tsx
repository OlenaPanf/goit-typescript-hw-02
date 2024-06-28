import { FormEvent } from 'react'; //бо onSubmit і preventDefault
import css from './SearchBar.module.css'
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const keyword = (form.elements.namedItem('keyword') as HTMLInputElement).value;

    if (keyword.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSearch(keyword);
    form.reset();
   };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="keyword"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
    </header>
  );
};


//=============Оригінал=====================================
// export const SearchBar = ({ onSearch }) => {
  
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const keyword = form.elements.keyword.value;
        
//     };
// }
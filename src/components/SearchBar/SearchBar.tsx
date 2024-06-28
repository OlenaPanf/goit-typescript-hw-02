import css from './SearchBar.module.css'
import { toast } from 'react-hot-toast';

export const SearchBar = ({ onSearch }) => {
  
	const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const keyword = form.elements.keyword.value;
        
    // Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції.
    if(keyword.trim() === "") {
        toast.error("Please enter search term!");
        return;
    }
    
    // У протилежному випадку викликаємо пропс і передаємо йому значення поля
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

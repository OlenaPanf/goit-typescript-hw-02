import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
  onLoadMore: () => void; //бо функція
}

export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
  return (
    <button className={css.button} onClick={onLoadMore}>Load more</button>
  );
}

//================Оригінал====================================
// export default function LoadMoreBtn({ onLoadMore }) {
//   return (
//     <button className={css.button} onClick={onLoadMore}>Load more</button>
//   );
// }


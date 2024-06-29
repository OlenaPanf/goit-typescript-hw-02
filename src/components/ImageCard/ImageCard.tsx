import css from './ImageCard.module.css';
import { Image } from '../App/App.types';

interface ImageCardProps {
  card: Image;
  onClick: (id: string) => void; //бо функція
}

export default function ImageCard({ card, onClick }: ImageCardProps) {
  const { id, urls: { small } } = card;

  return (
    <div className={css.container} onClick={() => onClick(id)}>
      <img
        className={css.img}
        src={small}
        alt=""
        width="360"
        height="200"
      />
    </div>
  );
}
//============Оригінал============================================
// export default function ImageCard({ card, onClick }) {
//   const { id, urls: { small } } = card;

//   return (
//     <div className={css.container} onClick={() => onClick(id)}>
//       <img
//         className={css.img}
//         src={small}
//         alt=""
//         width="360"
//         height="200"
//       />
//     </div>
//   );
// }
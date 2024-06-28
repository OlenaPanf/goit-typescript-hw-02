import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard"

interface Image {
  id: string;
  urls: {
    small: string;
  };
}

interface ImageGalleryProps {
  cards: Image[]; //масив карток
  onCardClick: (id: string) => void; //бо функція
}

export default function ImageGallery({ cards, onCardClick }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {cards.map((card) => (
        <li className={css.card} key={card.id}>
          <ImageCard card={card} onClick={onCardClick} />
        </li>
      ))}
    </ul>
  );
}

//================Оригінал====================================
// export default function ImageGallery({ cards, onCardClick }) {
//   return (
//     <ul className={css.gallery}>
//       {cards.map((card) => (
//         <li className={css.card} key={card.id}>
//           <ImageCard card={card} onClick={onCardClick} />
//         </li>
//       ))}
//     </ul>
//   );
// }



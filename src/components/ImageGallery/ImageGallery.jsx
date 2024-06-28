import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ cards, onCardClick }) {
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



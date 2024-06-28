import css from './ImageCard.module.css'

export default function ImageCard({ card, onClick }) {
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



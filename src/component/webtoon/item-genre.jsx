export const ItemGenre = ({ name, onSetSelectedGenre, id, selectedGenre }) => {
  const onClickGenre = () => {
    onSetSelectedGenre(id);
    console.log(id);
  };

  return (
    <li
      className={
        'item-genre-register' +
        (selectedGenre === id ? ' selected-register-genre' : '')
      }
    >
      <button type="button" onClick={onClickGenre}>
        {name}
      </button>
    </li>
  );
};

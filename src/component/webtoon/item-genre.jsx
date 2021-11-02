export const ItemGenre = ({ name, setSelectedGenre, id }) => {
  const onClickGenre = () => {
    setSelectedGenre(id);
  };

  return (
    <li>
      <button type="button" onClick={onClickGenre}>
        {name}
      </button>
    </li>
  );
};

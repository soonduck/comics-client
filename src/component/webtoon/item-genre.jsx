export const ItemGenre = ({ name, setSelectedGenre, id }) => {
  const onClickGenre = () => {
    setSelectedGenre(id);
    console.log(id);
  };

  return (
    <li>
      <button type="button" onClick={onClickGenre}>
        {name}
      </button>
    </li>
  );
};

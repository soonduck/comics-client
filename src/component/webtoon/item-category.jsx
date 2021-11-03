export const ItemCategory = ({
  name,
  categories,
  setCategories,
  index,
  activeCategories,
  id,
  onSetActiveCategories,
}) => {
  const addActiveCategories = (id) => {
    onSetActiveCategories({ ...activeCategories, [id]: !activeCategories[id] });
    console.log(activeCategories);
  };

  return (
    <li
      className={
        'item-category' + (activeCategories[id] ? ' active-category' : '')
      }
    >
      <button type="button" onClick={() => addActiveCategories(id)}>
        <span className="bold"># </span>
        {name}
      </button>
    </li>
  );
};

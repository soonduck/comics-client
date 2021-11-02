export const ItemCategory = ({
  name,
  id,
  categories,
  setCategories,
  index,
}) => {
  const onClickCategory = () => {
    const result = [];
    for (let i = 0; i < categories.length; i++) {
      if (i === index) {
        result[i] = { ...categories[i], selected: !categories[i].selected };
        continue;
      }
      result[i] = { ...categories[i] };
    }
    setCategories(result);
  };

  return (
    <li>
      <button type="button" onClick={onClickCategory}>
        #{name}
      </button>
    </li>
  );
};

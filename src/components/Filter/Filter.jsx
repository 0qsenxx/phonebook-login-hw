import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const findContact = (evt) => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="contactsFilter"
        onInput={(evt) => findContact(evt)}
      />
    </>
  );
};

export default Filter;

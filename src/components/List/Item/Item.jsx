import { memo } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/store";
import "./Item.scss";

function Item({ id, name }) {
  const dispatch = useDispatch();

  function handleClickRmove() {
    dispatch(removeUser({ id }));
  }

  return (
    <div className="item">
      <p>
        <span className="number-item">{id + 1}</span> {name}
      </p>
      <button className="button-item" onClick={handleClickRmove}>x</button>
    </div>
  );
}

export default memo(Item);

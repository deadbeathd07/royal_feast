import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../store/selectors";
import { addUser } from "../../store/store";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import "./List.scss";

function List() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const [value, setValue] = useState("");

  function upFirstSimb(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    if (value) {
      dispatch(addUser({ id: users.length, name: upFirstSimb(value) }));
      setValue("");
    } else {
      console.log("create error modwin");
    }
  }

  return (
    <div className="listWrap">
      <div className="list-enter">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
        />
        <button type="button" className="button-add" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="list">
        {users.map((item) => (
          <Item key={item.id} id={item.id} name={item.name}></Item>
        ))}
      </div>
      <Link to="/third">
        <button
          type="button"
          className="buttonList"
          disabled={users.length === 0}
        >
          Отправить
        </button>
      </Link>
    </div>
  );
}
export default List;

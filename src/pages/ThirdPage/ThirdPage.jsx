import "./ThirdPage.scss";
import DATA from "../../DATA/DATA";
import shuffle from "../../functions/shuffle";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/selectors";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { resetStore } from "../../store/store";
import { useDispatch } from "react-redux";

function ThirdPage() {
  const dispatch = useDispatch();

  const newData = shuffle([...DATA.decrees, ...DATA.main, ...DATA.alco]);

  const users = Array.from(useSelector(selectUsers));
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("!!!");
    handleClickChangeCount();
  }, []);

  function handleClickChangeCount() {
    console.log("!");
    setCount(count + 1);
  }

  function exit() {
    console.log("!!");
    dispatch(resetStore());
  }
  console.log("!!!!!!!");
  return (
    <div className="thirdPage">
      <div className="cardWrap">
        <Link to="/">
          <button type="button" onClick={exit} className="exit">
            X
          </button>
        </Link>
        <div className="card">
          <Card
            name={users[count % users.length].name}
            exercise={newData[count].exercise}
            func={handleClickChangeCount}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;

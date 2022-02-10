import "./ModalWindow.scss";
import { Link } from "react-router-dom";

function ModalWindow() {
  return (
    <div className="modalWindow">
      <div className="mailWrap">
        <div className="mail">
          <div className="vensel"></div>
          <h2 className="title element">Поздравляем!</h2>
          <p className="invitation element">
            Вы приглашены на королевский пир. Просим известить Нас о количестве
            Вашей свиты почтовым голубем!
          </p>
          <div className="signature">С уважением Его Величество</div>
        </div>
      </div>
      <Link to="/second">
        <button type="button" className="button">
          Ответить
        </button>
      </Link>
    </div>
  );
}

export default ModalWindow;

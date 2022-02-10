import "./StartPage.scss";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

function StartPage() {
  return (
    <div className="startPage">
      <div className="bgImage"></div>
      <div className="modWinWrap">
        <ModalWindow></ModalWindow>
      </div>
    </div>
  );
}

export default StartPage;

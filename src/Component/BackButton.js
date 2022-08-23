import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Item = () => {
  var select = document.getElementsByClassName("header-select")[0];
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        onMouseUp={() => (select.style = "display: flex;")}
        className="detail-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        
      </button>
    </>
  );
};

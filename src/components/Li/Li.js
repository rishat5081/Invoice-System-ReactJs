import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const Li = ({ name, deleteList, id }) => {
  return (
    <S.Li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">{name}</div>
      <span
        className="badge bg-danger rounded-pill"
        onClick={() => deleteList(id)}
      >
        <FontAwesomeIcon icon={faCircleMinus} />
      </span>
    </S.Li>
  );
};

export default Li;

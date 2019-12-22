import React from "react";
import { useDispatch } from "react-redux";
import { removeActiveFilter } from "../../actions/actionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./active-filter-li-element-style.scss";
import Zoom from "react-reveal/Zoom";

const ActiveFilterLiElement = ({ id, sectionID, text }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeActiveFilter(id, sectionID));
  };

  return (
    <Zoom duration={300}>
      <li>
        <div className="active-filter-box-wrap">
          <span>{text}</span>
          <FontAwesomeIcon icon={faTimes} onClick={handleClick} />
        </div>
      </li>
    </Zoom>
  );
};

export default React.memo(ActiveFilterLiElement);

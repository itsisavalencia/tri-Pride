import './MemberDescription.scss';
import placeholderImage from "../../assets/images/placeholderPhoto.jpg";

const Modal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>X</button>
        <div className="board-of-directors__photo-container">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  className="board-of-directors__photo"
                />
              ) : (
                <img
                  src={placeholderImage}
                  alt="placeholder"
                  className="board-of-directors__photo"
                />
              )}
            </div>
        <h3 className="modal__name">{member.name}</h3>
        <p className="board-of-directors__role">
                {member.role}{" "}
                <span className="board-of-directors__pronouns">
                  ({member.pronouns})
                </span>
              </p>
        <p className="modal__description">{member.description}</p>
      </div>
    </div>
  );
};

export default Modal;

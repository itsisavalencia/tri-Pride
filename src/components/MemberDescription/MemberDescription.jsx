import './MemberDescription.scss';

const Modal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>X</button>
        <img
          src={member.photo}
          alt={`${member.name}'s photo`}
          className="modal__photo"
        />
        <h3 className="modal__name">{member.name}</h3>
        <p className="modal__role">{member.role}</p>
        <p className="modal__pronouns">{member.pronouns}</p>
        <p className="modal__description">{member.description}</p>
      </div>
    </div>
  );
};

export default Modal;

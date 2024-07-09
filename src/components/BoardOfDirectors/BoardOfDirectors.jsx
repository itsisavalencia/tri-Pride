import { useEffect, useState } from "react";
import Modal from "../MemberDescription/MemberDescription";
import axios from "axios";
import placeholderImage from "../../assets/images/placeholderPhoto.jpg";
import "./BoardOfDirectors.scss";

const BoardOfDirectors = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [boardMembers, setBoardMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/board`);
        setBoardMembers(response.data);
      } catch (error) {
        console.error("Error fetching board members:", error);
      }
    };

    fetchBoardMembers();
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="board-of-directors">
      <h2 className="board-of-directors__title">Meet Our Team</h2>
      <div className="board-of-directors__grid">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="board-of-directors__card"
            onClick={() => handleMemberClick(member)}
          >
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
            <div className="board-of-directors__info">
              <h3 className="board-of-directors__name">{member.name}</h3>
              <p className="board-of-directors__role">
                {member.role}{" "}
                <span className="board-of-directors__pronouns">
                  ({member.pronouns})
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Modal member={selectedMember} onClose={handleCloseModal} />
    </section>
  );
};

export default BoardOfDirectors;

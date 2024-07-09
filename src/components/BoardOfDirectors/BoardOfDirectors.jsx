import { useEffect, useState } from "react";
import axios from "axios";
import "./BoardOfDirectors.scss";

const BoardOfDirectors = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [boardMembers, setBoardMembers] = useState([]);

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

  return (
    <section className="board-of-directors">
      <h2 className="board-of-directors__title">Meet Our Team</h2>
      <div className="board-of-directors__grid">
        {boardMembers.map((member) => (
          <div key={member.id} className="board-of-directors__card">
            <img
              src={member.photo}
              alt={`${member.name}'s photo`}
              className="board-of-directors__photo"
            />
            <div className="board-of-directors__info">
              <h3 className="board-of-directors__name">{member.name}</h3>
              <p className="board-of-directors__role">{member.role}</p>
              <p className="board-of-directors__pronouns">{member.pronouns}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;

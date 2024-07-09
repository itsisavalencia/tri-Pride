import "./MissionVission.scss";

const MissionVission = () => {
  return (
    <section className="mis-vis">
      <div className="mis-vis__card">
        <h2 className="mis-vis__title">MISSION</h2>
        <p className="mis-vis__content">
          tri-Pride is a community Pride organization that aims to create and
          hold inclusive, safer, and accessible events for the 2SLGBTQIIA+
          community in the Kitchener, Waterloo, and Cambridge Region. We support
          our community in the pursuit of equity, representation, and
          celebration of the resilience of the Queer and Trans community.
          tri-Pride is committed to standing with, empowering, and centralizing
          Black, Indigenous, People of Global Majority (BIPGM), and all
          equity-deserving populations within our diverse community.
        </p>
      </div>
      <div className="mis-vis__card">
        <h2 className="mis-vis__title">VISION</h2>
        <p className="mis-vis__content">
          tri-Pride envisions a Waterloo Region where 2SLGBTQIIA+ people, while
          embracing all their intersectional identities, are celebrated,
          represented, and empowered to thrive as an integral part of our
          diverse community tapestry.
        </p>
      </div>
    </section>
  );
};

export default MissionVission;

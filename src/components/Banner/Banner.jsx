import './Banner.scss';
import acckwa from '../../assets/logos/memberships/acckwa.png';
import cji from '../../assets/logos/memberships/cji.png';
import prep from '../../assets/logos/memberships/prep.png';
import shore from '../../assets/logos/memberships/shore.png';
import spectrum from '../../assets/logos/memberships/spectrum.png';
import van from '../../assets/logos/memberships/van.png';

const logos = [
  { src: acckwa, alt: 'acckwa logo', link: 'https://www.acckwa.com/' },
  { src: cji, alt: 'cji logo', link: 'https://cjiwr.com/' },
  { src: prep, alt: 'prep logo', link: 'https://www.prepclinic.ca/' },
  { src: shore, alt: 'shorelogo', link: 'https://www.shorecentre.ca/' },
  { src: spectrum, alt: 'spectrum logo', link: 'https://www.ourspectrum.com/' },
  { src: van, alt: 'van logo', link: 'https://www.fiertecanadapride.org/' }
];

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__track">
        {logos.concat(logos).map((logo, index) => (
          <a key={index} href={logo.link} className="banner__logo-link" target="_blank" rel="noopener noreferrer">
            <img src={logo.src} alt={logo.alt} className="banner__logo" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;

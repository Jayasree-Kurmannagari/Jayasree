import { home } from "../../portfolio";
import "./Home.css";

const Home = () => {
  const { name, role, description } = home;

  return (
    <div className="home center flex_item">
      <div className="home__description">
        {name && (
          <span className="home__intro">
            Hi, I am <h1 className="home__name">{name}.</h1>
          </span>
        )}

        {role && <h2 className="home__role">A {role}.</h2>}
        <p className="home__desc">{description && description}</p>

        <div className="home__contact center">
            <a href= './resume.pdf' target="_blank" rel="noopener noreferrer">
              <span type="button" className="btn btn--outline">
                Resume
              </span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeRoot">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 homepage">
            <div className="row title">
              <div className="col-8">
                <h1>Homepage</h1>
              </div>
            </div>
            <div className="row content">
              <div className="col-12 col-lg-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis molestias non tenetur sunt temporibus pariatur eos
                  necessitatibus sequi deleniti repudiandae, aspernatur commodi
                  perspiciatis consectetur quae repellat laborum ea unde
                  aliquam, quas quam perferendis veritatis deserunt! Neque,
                  nulla laborum praesentium sunt quod ducimus ratione architecto
                  odit fugiat aspernatur ea fuga? Molestiae reprehenderit ex
                  deserunt ad, omnis dignissimos suscipit autem accusantium.
                  Nihil eum dolorum velit aliquam natus fugit nobis architecto
                  vel omnis, cumque porro non neque voluptatum quidem pariatur.
                  Laborum culpa distinctio nisi, dolore commodi quas est sed
                  ipsum voluptatum. Minima nam qui alias provident maxime
                  repudiandae odit impedit, fugiat corporis fuga.
                </p>
              </div>
            </div>
          </div>
          <div className="col sideBar">
            <div className="row title">
              <div className="col-8">
                <h3>Article</h3>
              </div>
            </div>
            <div className="row content">
              <div className="col-12 col-lg-11">
                <img
                  src="/pp_adobespark.jpg"
                  alt="cth"
                  height={50}
                  width={50}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
                  <Link className="link" to="/about">
                    Learn more
                  </Link>
                </p>
                <img
                  src="/pp_adobespark.jpg"
                  alt="cth"
                  height={50}
                  width={50}
                />
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
                  <Link className="link" to="/about">
                    Learn more
                  </Link>
                </p>
                <img
                  src="/pp_adobespark.jpg"
                  alt="cth"
                  height={50}
                  width={50}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
                  <Link className="link" to="/about">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const About = () => {
  return (
    <div className="aboutRoot">
      <div className="container">
        <div className="row title">
          <div className="col">
            <h1>About me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col content">
            <div class="jumbotron">
              <div class="container">
                <img
                  src="/pp_adobespark.jpg"
                  alt="foto"
                  className="rounded-circle"
                  height={128}
                  width={128}
                />
                <h1 className="name">Nicholas Alvi Saputra</h1>
                <p className="job">Programmer | Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

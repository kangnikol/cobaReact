const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row title">
          <div className="col-8">
            <h1>Homepage</h1>
          </div>
          <div className="col-4">
            <h3>Article</h3>
          </div>
        </div>
        <div className="row content">
          <div className="col-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias officia quos sunt sequi quibusdam obcaecati, incidunt
              dolorum dolor aut tempora est quas maxime magnam sit officiis
              reiciendis ipsa qui quia, corrupti sint impedit, pariatur magni.
              Alias dolorum sunt cumque architecto voluptates, sint quisquam sit
              perferendis illo id maiores ullam perspiciatis?
            </p>
          </div>
          <div className="col-4 sideBar">
            <p>
              <img src="/pp_adobespark.jpg" alt="cth" height={30} width={30} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
            <p>
              <img src="/pp_adobespark.jpg" alt="cth" height={30} width={30} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
            <p>
              <img src="/pp_adobespark.jpg" alt="cth" height={30} width={30} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

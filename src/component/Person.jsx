import data from "./data";

const Person = () => {
  return (
    <>
      <div className="container">
        <h1>Albums</h1>
        <div className="box">
          {data.map((item) => {
            return (
              <div className="box1">
                <figure>
                  <img src={item.src.large} alt="" />
                </figure>
                <p>{item.photographer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Person;

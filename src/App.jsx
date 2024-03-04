import "./styles/app.scss";
import "./styles/nesting.scss";
import "./styles/extend.scss";
import "./styles/mixin.scss";

const App = () => {
  return (
    <>
      <div className="productCard">
        <h1>Hey There i am styled by nesting SASS file</h1>
        <a href="">me too styled by nesting sass file</a>
      </div>
      <div className='btn'>
        <button>Click Me</button>
        <p>Hey i have all the properties of button </p>
      </div>
      <div className="mixin">
        <p className="p1">First Para of Mixin</p>
        <p className="p2">Second Para of Mixin</p>
        <p className="p3">Third Para of Mixin</p> 
      </div>
    </>
  );
};

export default App;

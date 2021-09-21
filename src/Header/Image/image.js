
import './image.css';

function Image() {
  return (
    <div className="Image">
      <div className="Title">
        <div className="Title_wrapper">
          <div className="Title_text">
            <span>A taste</span>
          </div>
          <div className="Title_textWithLines">
            <div className="Title_textWithLines_text">
              of freshness
              <div  className="line left"></div>
              <div  className="line right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;

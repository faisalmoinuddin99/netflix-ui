import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './Featured.scss'

const Featured = ({type}) => {
    return (
        <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "anime" ? "Anime" : "Series"}</span>
            <select name="genre" id="genre">
                <option >Genre</option>
                <option value="adventure" >Adventure</option>
                <option value="anime" >Anime</option>
                <option value="crime" >Crime</option>
                
            
            
            </select>
            </div>
        )}
            <img
        width="100%"
        src="https://img.wallpapersafari.com/desktop/1600/900/1/69/Z8QOjH.jpg"
        alt=""
      />
      <div className="info">
          <img src="https://cdn.charlieintel.com/wp-content/uploads/2021/08/16065906/Naruto-in-Fortnite-1000x600.jpg" alt="" />
          <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat!
          </span>
          <div className="buttons">
              <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <button className="more">
                  <InfoOutlined />
                  <span>Info</span>
              </button>
          </div>
      </div>

        </div>
    )
}

export default Featured

import loading from '../assets/loadingImage.png';

function Thumbnail(prop) {
 return (
  <img className="thumbnail" src={prop.thumbnail ? prop.thumbnail : loading}></img>
 )
}

export default Thumbnail;
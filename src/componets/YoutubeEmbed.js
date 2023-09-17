import PropTypes from "prop-types"


const Youtubevideos = ({ embedId }) => (
    <>
      <iframe
       width={`800`} height={`200`} 
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
        className="frustvide"
      />
    </>
  );
  
  Youtubevideos.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  export default Youtubevideos;
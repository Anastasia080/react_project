const EventBlock = ({ title,data, describe, linkUrl, picture }) => {
  const blockStyle = {
    width: '350px',
    height: '400px',
    textAlign: 'left',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'black',
    textDecoration: 'none',
    lineHeight: '1.0',
  };

  return (
    <div className="event-block">
      <a href={linkUrl}  style={blockStyle}>
          <div className="same_size"><img src={picture}/></div>
          <h6>{data}</h6>
          <h3>{title}</h3>
          <h5>{describe}</h5>
      </a>
    </div>
  );
};

export default EventBlock;
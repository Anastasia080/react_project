const EventBlock = ({ title,data, describe, linkUrl, picture }) => {
  return (
    <div className="event-block">
      <a href={linkUrl} className="event-block-link">
          <div className="same_size"><img src={picture}/></div>
          <h6>{data}</h6>
          <h3>{title}</h3>
          <h5>{describe}</h5>
      </a>
    </div>
  );
};

export default EventBlock;
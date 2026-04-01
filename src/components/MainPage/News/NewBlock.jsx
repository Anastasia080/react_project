const NewBlock = ({ title,data, linkUrl, picture }) => {
  return (
    <div className="new-block">
      <a href={linkUrl} className="new-block-link">
          <div className="same_size1"><img src={picture}/></div>
          <div className="new-block-text">
            <h5>{data}</h5>
            <h3>{title}</h3>
          </div>
      </a>
    </div>
  );
};

export default NewBlock;
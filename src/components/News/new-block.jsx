const NewBlock = ({ title,data, linkUrl, picture }) => {
  const blockStyle = {
    width: '530px',
    height: '120px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div className="new-block">
      <a href={linkUrl}  style={blockStyle}>
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
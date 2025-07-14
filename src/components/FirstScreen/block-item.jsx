const BlockItem = ({ title, linkUrl, color }) => {
  const blockStyle = {
    width: '255px',
    height: '175px',
    textAlign: 'left',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <div className={`block-item ${color}`} style={blockStyle}>
      <h3>{title}</h3>
      <a href={linkUrl}>Подробнее &rarr;</a>
    </div>
  );
};

export default BlockItem;
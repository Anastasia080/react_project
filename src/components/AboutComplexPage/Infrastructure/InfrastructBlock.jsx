const InfrastructBlock = ({ title, describe, linkUrl, picture }) => {
  return (
    <div className="infrastruct-block">
      <a href={linkUrl} className="infrastruct-block-link">
          <div className="infrastruct_same_size"><img src={picture}/></div>
          <h3>{title}</h3>
          <h5>{describe}</h5>
      </a>
    </div>
  );
};

export default InfrastructBlock;
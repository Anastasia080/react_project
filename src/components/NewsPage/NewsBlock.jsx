const NewsBlock = ({title, data, linkUrl, picture, discribe}) => {
  return (
    <div className="news-block">
      <a href={linkUrl} className="news-block-link">
          <div className="same_size_new"><img src={picture}/></div>
            <h6>{data}</h6>
            <h3>{title}</h3>
            <h5>{discribe}</h5>
      </a>
    </div>
  );
};

export default NewsBlock;
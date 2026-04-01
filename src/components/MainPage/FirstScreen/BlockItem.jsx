import { Link } from 'react-router-dom';

const BlockItem = ({ title, linkUrl, color }) => {
  return (
    <div className={`block-item ${color}` }>
      <h3>{title}</h3>
      <Link to={linkUrl}>Подробнее &rarr;</Link>
    </div>
  );
};

export default BlockItem;
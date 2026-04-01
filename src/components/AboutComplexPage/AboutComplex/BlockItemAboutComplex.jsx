const BlockItemAboutComplex = ({ title, color, description }) => {
  return (
    <div className={`block-item_about_complex ${color}` }>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default BlockItemAboutComplex;
import BlockItemAboutComplex from './BlockItemAboutComplex';

function BlockWrapperAboutComplex() {
  return (
    <div className="about_complex_block-wrapper">
      <BlockItemAboutComplex 
        title="50 000 м²"
        color="block-item_about_complex1"
        description="закрытых выставочных площадей"
      />
      <BlockItemAboutComplex 
        title="40 000 м²"
        color="block-item_about_complex2"
        description="открытых выставочных площадей"
      />
      <BlockItemAboutComplex
        title="13 144 м²"
        color="block-item_about_complex3"
        description="3 павильона"
      />
      <BlockItemAboutComplex 
        title="50 000 м²"
        color="block-item_about_complex4"
        description="выставки"
      />
    </div>
  );
}

export default BlockWrapperAboutComplex;
import BlockItem from './block-item';

function BlockWrapper() {
  return (
    <div className="first-screen_block-wrapper">
      <BlockItem 
        title="Календарь мероприятий"
        linkUrl="#events"
        color="block-item1"
      />
      <BlockItem 
        title="Как добраться до Экспофорума"
        linkUrl=""
        color="block-item2"
      />
      <BlockItem 
        title="Онлайн-заявка на организацию мероприятия"
        linkUrl=""
        color="block-item3"
      />
      <BlockItem 
        title="План и инфраструктура комплекса"
        linkUrl=""
        color="block-item4"
      />
    </div>
  );
}

export default BlockWrapper;
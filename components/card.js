/* eslint-disable @next/next/no-img-element */
export default function Card({ imagePath = '', title = '', subTopics = [] }) {
  return (
    <div className="card center">
      <img src={imagePath} height={90} width={90} alt="" />
      <p className="title">{title}</p>
      <div className="content center">
        {subTopics.map((topic) => (
          <div key={topic.title}>
            <p className="sub-title">{topic.title}</p>
            <div className="sub-content">
              <p className="price">{topic.price}</p>
              <p className="price-measure">{topic.priceMeasure}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

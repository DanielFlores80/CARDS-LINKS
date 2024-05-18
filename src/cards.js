import React from "react";
import Card from "./card";
import image1 from "./Assets/js.png";
import image2 from "./Assets/java.png";
import image3 from "./Assets/python.png";
const cards = [
  {
    id: 1,
    title: "Javascript",
    image: image1,
    instructor: "Humberto Dorantes",
    url: "http://google.com/",
  },
  {
    id: 2,
    title: "Java",
    image: image2,
    instructor: "Samuel López",
    url: "http://youtube.com/",
  },
  {
    id: 3,
    title: "Python",
    image: image3,
    instructor: "Angela Rios",
    url: "http://airbnb.com/",
  },
];

export default function Cards() {
  console.log(cards);
  return (
    <div className="container d-flex justify-content-center align-item-center h-100">
      <div className="row">
        {cards.map((c) => (
          <div className="col-md-4" key={cards.id}>
            <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              url={c.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

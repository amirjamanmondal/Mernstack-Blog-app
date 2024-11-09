import React from "react";
import img from "../../static/images.jpg";
import Category from "./Category";

const Article = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Category />
      <hr className="w-full text-base h-[2px] bg-red-700" />
      <div className="w-full flex flex-row gap-3">
        <img src={img} alt="case-img" className="h-fit w-fit" />
        <img src={img} alt="case-img" className="h-fit w-fit" />
      </div>
      <h1 className="w-full">
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </h1>
      <p className="w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
        laudantium laborum quia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit cupiditate consequuntur rerum accusantium
        accusamus at officiis sunt blanditiis optio? Obcaecati unde optio
        inventore architecto similique blanditiis nisi reiciendis, voluptates,
        culpa nam corporis reprehenderit magnam laboriosam ullam atque. Id
        inventore porro reprehenderit facere iusto delectus repellat! Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Earum praesentium
        dignissimos neque architecto! Culpa dolores quas maiores sapiente harum
        id? Expedita quis laborum, impedit sit neque facilis possimus minus
        officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
        minima quaerat enim voluptas, impedit voluptatum tempora error ad nisi
        cumque eveniet iure omnis quod harum?
      </p>
    </div>
  );
};

export default Article;

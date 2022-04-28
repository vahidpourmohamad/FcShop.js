import React from "react";
import "./Blogpostlistcmp.css";
import { BlogDataDummy } from "./BlogDummyData";
import BlogpostCmp from "./BlogpostCmp";
export default function Blogpostlistcmp() {
  let Counter = 0;
  return (
    <div className="BlogpostlistcmpContainer">
      <div className="BlogpostlistcmpParent">
        <div className="BlogpostlistcmpHeading">
          <div className="BlogpostlistcmpHeadingText">دسته بندی ها</div>
          <div className="Line"></div>
        </div>

        <div className="Bloglist">
          {BlogDataDummy.slice(0, 4).map((BlogData, id) => (
            <BlogpostCmp
              id={id}
              title={BlogData.title}
              datetime={BlogData.datetime}
              link={BlogData.link}
              author={BlogData.author}
              image={BlogData.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.map((blog) => {
        return (
          <div key={blog.id} className="ssr-styles">
            <h3>{blog.id}</h3>
            <Link href={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;

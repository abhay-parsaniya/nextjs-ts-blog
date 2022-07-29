import React from "react";
import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((curElem: any) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
    console.log(context)
  const id = context.params.pageNo;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

interface dataType {
  data: { id: number; title: string; body: string };
}

const MyBlog = ({ data }: dataType) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default MyBlog;

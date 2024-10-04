import React from "react";
import { FocusCards } from "../acertenityComponents/BlogCard";
import NavBar from "../components/NavBar";
import ClipboardIcon from "./Icon";
import Footer from "../components/Footer";

const Blog = () => {
  const cardsData = [
    {
      src: "/public/blogs/image_url=https_2F_2Fimages.unsplash.com_2Fphoto-1696429175928-793a1cdef1d3_q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D&w=828&q=75.jpg",
      title: "Changelog for 2024",
      description:
        "Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improve...",
      profileSrc: "/public/blogs/test.png",
      profileName: "Manu Arora",
    },
    {
      src: "/public/blogs/image_url=https_2F_2Fimages.unsplash.com_2Fphoto-1493612276216-ee3925520721_q=80&w=3308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D&w=828&q=75.jpg",
      title: "What is marketing anyway",
      description:
        "Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improve...",
      profileSrc: "/public/blogs/test.png",
      profileName: "Manu Arora",
    },
    {
      src: "/public/blogs/image_url=https_2F_2Fimages.unsplash.com_2Fphoto-1560958089-b8a1929cea89_q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D&w=1920&q=75.jpg",
      title: "Cool things to do with AI",
      description:
        "Explore the latest AI tools and applications that are revolutionizing various industries. From image...",
      profileSrc: "/public/blogs/test.png",
      profileName: "Manu Arora",
    },
  ];

  const posts = [
    {
      title: "How companies are working without AI",
      description:
        "Explore the latest AI tools and applications that are revolutionizing various in...",
      date: "July 14, 2022",
      authorImage: "/public/blogs/test.png",
    },
    {
      title: "Top 5 LLM of all time",
      description:
        "Explore the latest AI tools and applications that are revolutionizing various in...",
      date: "July 14, 2021",
      authorImage: "/public/blogs/test.png",
    },
    {
      title: "What is AI anyway?",
      description:
        "Explore the latest AI tools and applications that are revolutionizing various in...",
      date: "July 14, 2020",
      authorImage: "/public/blogs/test.png",
    },
  ];
  return (
    <div className="min-h-screen bg-black font-monstera py-12 px-4 sm:px-6 lg:px-8">
      <NavBar />
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16 mt-32">
          <div className="inline-block p-1 h-14 w-14 bg-gray-800 rounded-lg mb-4">
            <ClipboardIcon />
          </div>
          <h1 className="text-5xl font-semibold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-300">
            Discover insightful resources and expert advice from our seasoned
            team to elevate your knowledge.
          </p>
        </div>
        <FocusCards cards={cardsData} />
      </div>
      <div className="bg-black text-white p-6 mt-28">
        <h2 className="text-3xl font-bold mb-6">More Posts</h2>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-6 last:border-b-0"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-2">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{post.date}</span>
                <img
                  src={post.authorImage}
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

"use client"
import Head from "next/head"
import Navbar from "@/app/Components/Navbar";
import { useState, useEffect } from "react";
import { Client, Databases, Query } from "appwrite";
import Image from "next/image";

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64a3e3073c9cf58aed38');

const BlogPage = ({ params }) => {
  // State to store the blog post data
  const [blogPost, setBlogPost] = useState();

  // Destructure the slug from the params object
  const { slug } = params;

  // Fetch the blog post data when the component mounts
  useEffect(() => {
    document.title = 'Home: The Hunting Coder';
    const databases = new Databases(client);

    // Create a query to find documents with the matching slug
    const query = [
      Query.equal('slug', slug)
    ];

    // Fetch the documents from the Appwrite database
    let promise = databases.listDocuments(
      '64a3e7a869351a3b6a57',
      '64a3e7b66cbbbbc7b4b5',
      query
    );

    // Handle the response
    promise.then(function (response) {
      console.log(response);
      setBlogPost(response.documents[0]);
    }, function (error) {
      console.log(error);
    });
  }, []);

  // Render the blog post
  return (
    <>
      <Head>
        <title>{blogPost?.title}</title>
        <meta name="description" content="Discover the incredible capabilities of map, filter, and reduce functions in JavaScript." />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* <Image className="mb-4" src={blogPost?.image} width={300} height={350} alt="Blog Image"/> */}
        <h1 className="text-3xl font-bold mb-4">{blogPost?.title}</h1>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: blogPost?.content }}></p>
      </div>
    </>
  );
};

export default BlogPage;

//              // const blogContent = {
//              //             title: 'Unleashing the power of Map,Filter, and Reduce in JavaScript',
//              //             content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo perspiciatis incidunt veritatis assumenda, accusamus natus quos voluptas fugit. Sequi velit veritatis quo. Vel error, aliquid itaque eius quis iste.',
//              //             image: '/blog-image.jpg'
//              // };

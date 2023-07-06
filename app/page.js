"use client"
import Image from 'next/image'
import Navbar from "./Components/Navbar"
import Link from 'next/link';
// import { Client } from 'appwrite';
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from 'react';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64a3e3073c9cf58aed38');

export default function Home() {
  const [blogPosts, setblogPosts] = useState([])

  useEffect(() => {
    document.title = 'Home: The Hunting Coder'

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64a3e7a869351a3b6a57", "64a3e7b66cbbbbc7b4b5",
    );

    promise.then(function (response) {
      console.log(response);
      setblogPosts(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className='bg-white rounded-lg shadow-md'>
              <Image className='w-full h-48 object-cover rounded-t-lg' width={300} height={350} src={post.image} alt={post.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.metadesc}...</p>
                <Link href={`/blog/${post.slug}`} className='mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


// {
//   id: 1,
//   title: 'Blog Post 1',
//   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo perspiciatis incidunt veritatis assumenda, accusamus natus quos voluptas fugit. Sequi velit veritatis quo. Vel error, aliquid itaque eius quis iste.',
//   image: 'https://example.com/image1.jpg',
// },
// {
//   id: 2,
//   title: 'Blog Post 2',
//   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo perspiciatis incidunt veritatis assumenda, accusamus natus quos voluptas fugit. Sequi velit veritatis quo. Vel error, aliquid itaque eius quis iste.',
//   image: 'https://example.com/image2.jpg',
// }


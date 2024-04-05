import React from "react";

import "./style.scss";
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";


const Blogs = () => {
  return (<Section id="blogs" title="Blogs & Articles" background="dark">
    
    <div className="blogs-content-wrapper">
         <BlogCard
                    user="Atma Ram"
                    date="Mar 30 2024"
                    image={Blog1}
                    title="A Step-by-Step Guide to Building a Simple Next.js 13 Blog"
                    description="Table of Contents. Introduction; Setting up the Project; Understanding the Folder Structure; Listing All Blog Posts; Showcasing a Single..."
                />
                <BlogCard
                    user="Atma Ram"
                    date="Mar 30 2024"
                    image={Blog2}
                    title="React Native vs Swift: Which One is Best For Your Business"
                    description="Today, a mobile app is essential for companies to connect with their potential customers in a competitive digital atmosphere."
                />
                <BlogCard
                    user="Atma Ram"
                    date="Mar 30 2024"
                    image={Blog3}
                    title="Top 10 Best Cross Platform App Development Frameworks"
                    description="Top 10 cross-platform app frameworks creating a stir in app development domain. Read on to know the features of Cross-platform Frameworks..."
                />
    </div>
    </Section>
  );
};

export default Blogs;
import React from 'react';
import './Blog.css';

const posts = [
  {
    category: 'Brand Strategy',
    title: 'How strong storytelling turns a business into a memorable brand',
    excerpt: 'Discover the building blocks of a clear brand story and how to use them to create meaningful audience connections.',
  },
  {
    category: 'Marketing',
    title: 'Creating campaigns that connect, convert and build trust',
    excerpt: 'A practical look at combining audience insight, creativity and the right channels to produce measurable results.',
  },
  {
    category: 'Media & Culture',
    title: 'Why authentic African stories belong at the centre of modern media',
    excerpt: 'We explore the value of cultural context and authentic perspectives in communications that travel across borders.',
  },
];

const Blog = () => (
  <section className="blog-section" id="blog">
    <div className="blog-content">
      <span className="blog-label">Our Blog</span>
      <h1>Ideas, insights and stories</h1>
      <p className="blog-intro">Explore fresh perspectives on branding, media, communication and the creative work shaping memorable experiences.</p>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <article className="blog-card" key={post.title}>
            <div className="blog-card-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="blog-card-body">
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-read-more">Read article →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;

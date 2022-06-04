import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About"
import Hero from "../components/Hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Hero />
        <div className="mx-auto max-w-7xl lg:px-8">
          <p>
            No blog posts found. 
          </p>
        </div>
        <About />
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
      {/* <div className="mx-auto max-w-7xl lg:px-8">
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol> */}
        <div className="bg-white pt-10 pb-12 px-4 sm:px-6 lg:pt-12 lg:pb-16 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Blog Posts</h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-gray-500">Weekly iOS focused articles.</p>
              </div>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {posts.map((post) => (
                <div key={post.frontmatter.title || post.fields.slug}>
                  <p className="text-sm text-gray-500">
                    <time>{post.frontmatter.date}</time>
                  </p>
                  <Link to={post.fields.slug} itemProp="url" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.frontmatter.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.frontmatter.description}</p>
                  </Link>
                  <div className="mt-3">
                    <Link to={post.fields.slug} itemProp="url" className="text-base font-semibold text-blue hover:text-blue">
                      Read full post
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    {/* </div> */}
  
      <About />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

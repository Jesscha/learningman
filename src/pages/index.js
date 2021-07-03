import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { randomAuthorGenerator } from "../utils/utils"

const BlogIndex = ({ data, location }) => {
  const [defaultAuthor, setDefaultAuthor] = useState()

  const siteTitle = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges
  const author = data.site.siteMetadata.author

  useEffect(() => {
    setDefaultAuthor(randomAuthorGenerator())
  }, [])

  return (
    <Layout
      location={location}
      title={siteTitle}
      description={description}
      tag={defaultAuthor}
    >
      <SEO title="All posts" />

      {posts.map(({ node }) => {
        if (!node.frontmatter.tags.find(e => e === defaultAuthor)) {
          return
        }
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
          }
        }
      }
    }
  }
`

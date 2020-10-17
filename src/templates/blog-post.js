import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import "./post.css"
import { kebabCase } from "lodash"

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const post = this.props.data.markdownRemark

    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { ogimage } = post.frontmatter
    // 에러 때문에 일단 지움 아래에 childImageSharp 를 지움
    const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src
    // const ogImagePath = ogimage

    const disqusConfig = {
      url: `${this.props.data.site.siteMetadata.siteUrl}${post.fields.slug}`,
      identifier: post.fields.slug,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={ogImagePath}
        />
        <div
          style={{
            marginBottom: rhythm(0),
            backgroundColor: `#f9f9f9`,
            borderRadius: `5px`,
            padding: `15px`,
            marginBottom: `15px`,
            fontSize: "16px",
            color: "",
          }}
        >
          <i>
            러닝맨에 방문해 주셔서 감사합니다. 더 나은 성장꾼이 되기 위한 &nbsp;
            <strong>
              <a
                href="https://docs.google.com/forms/d/1ktb7Fbke5Y388qW5yEIB170No4eJyheMGhu5yxHthuU/edit"
                target="blank"
              >
                설문
              </a>
            </strong>
            을 준비 했습니다. 바쁘시겠지만, 시간내어 저희의 성장에 동참해 주시면
            감사하겠습니다.
          </i>
        </div>
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>

            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {post.frontmatter.tags ? (
            <div
              style={{
                marginBottom: rhythm(1),
              }}
            >
              <span>tags: </span>
              <ul
                style={{
                  display: `inline`,
                  marginLeft: 0,
                }}
              >
                {post.frontmatter.tags.map(tag => (
                  <li
                    key={tag + `tag`}
                    style={{
                      textDecoration: "none",
                      display: `inline`,
                      paddingLeft: rhythm(1),
                    }}
                  >
                    <Link
                      to={`/tags/${kebabCase(tag)}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <footer></footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        ogimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
// 에러로 원래 있던 거를 때어놓음
// ogimage {
//     childImageSharp {
//       fixed {
//         src
//       }
//     }
//   }

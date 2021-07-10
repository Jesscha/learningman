import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import "./post.css"
import { kebabCase } from "lodash"
import AuthorDescription from "../components/authorDescription"
// 함수 컴포넌트로 바꾸자
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

    // 저자를 발라내자
    const author = () => {
      const tags = this.props.data.markdownRemark.frontmatter.tags
      if (tags.find(tag => tag === "eddy")) {
        return "eddy"
      }
      if (tags.find(tag => tag === "jesse")) {
        return "jesse"
      }
      if (tags.find(tag => tag === "kay")) {
        return "kay"
      }
      if (tags.find(tag => tag === "robbie")) {
        return "robbie"
      }

      return
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={ogImagePath}
        />
        {/* <div
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
            더 나은 러닝맨이 될 수 있게 독자 여러분의 목소리를 들려주세요! (
            <strong>
              <a
                href="https://docs.google.com/forms/d/1ktb7Fbke5Y388qW5yEIB170No4eJyheMGhu5yxHthuU/edit"
                target="blank"
              >
                러닝맨에게 말걸기
              </a>
            </strong>
            )
          </i>
        </div> */}
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
            <AuthorDescription tag={author()} isSmall={true} />
            {/* 작은놈용 컴포넌트를 하나 새로 만들까?  */}
          </header>
          <section
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <AuthorDescription tag={author()} />
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

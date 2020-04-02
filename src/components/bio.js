/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import './bio.css'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author} = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0),
        backgroundColor: `#f9f9f9`,
        borderRadius: `5px`,
        padding: `15px`,
        marginBottom: `15px`,
        marginTop:`15px`
      }}
    >
      <div className="image image-hidden">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          marginTop: 15,
          marginBottom: 15,
          minWidth: 50
        }}

      />

      </div>
       



      <p style={{
        fontSize: 16,
        marginBottom: 0
      }}> 
      러닝맨은 당신의 배움과 성장을 도와줄 미디어입니다. 배우는 인간 3명(
        <Link to={'tags/eddy'}> Eddy</Link> 
        ,  
        <Link to={'tags/jesse'}> Jesse</Link>
        ,  
        <Link to={'tags/kay'}> Kay </Link>
        )의 성장 프로젝트이기도 합니다. 각자 격주로 글을 올립니다. 직접 경험한 생각만 담습니다. 멋있는 척 하지 않습니다. 여러분의 배움과 성장에 도움이 되었으면 좋겠습니다.
      </p>
    </div>
  )
}

export default Bio

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
import "./bio.css"

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

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        // display: `flex`,
        marginBottom: rhythm(0),
        backgroundColor: `#f9f9f9`,
        borderRadius: `5px`,
        padding: `15px`,
        marginBottom: `15px`,
        marginTop: `15px`,
      }}
    >
      <div
        style={{
          display: `flex`,
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
              minWidth: 50,
            }}
          />
        </div>

        <p
          style={{
            fontSize: 16,
            marginBottom: 0,
          }}
        >
          러닝맨은 당신의 배움과 성장을 도와줄 미디어입니다. 배우는 인간 4명(
          <Link to={"/tags/eddy"}> Eddy</Link>,
          <Link to={"/tags/jesse"}> Jesse</Link>,
          <Link to={"/tags/kay"}> Kay </Link>
          <Link to={"/tags/robbie"}> Robbie </Link>
          )의 성장 프로젝트이기도 합니다. 각자 격주로 글을 올립니다. 직접 경험한
          생각만 담습니다. 멋있는 척 하지 않습니다.
        </p>
      </div>
      <hr style={{ margin: "8px" }}></hr>
      <div
        style={{
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
      </div>
    </div>
  )
}

export default Bio

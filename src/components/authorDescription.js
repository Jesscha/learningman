import { divide } from "lodash"
import React, { useMemo } from "react"
import { AUTHORS } from "../constants/constant"
import "./authorDescription.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useHistory, BrowserRouter as Router } from "react-router-dom"

const AuthorDescription = ({ tag, isSmall }) => {
  const history = useHistory()
  console.log(history)

  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(
        filter: { fluid: { originalName: { regex: "/desc.png$/" } } }
      ) {
        edges {
          node {
            fluid {
              originalName
              originalImg
            }
          }
        }
      }
    }
  `)
  const descImgArr = useMemo(() => {
    return (
      data &&
      data.allImageSharp.edges.map(
        ({
          node: {
            fluid: { originalName, originalImg },
          },
        }) => ({ originalName, originalImg })
      )
    )
  }, [])

  const AuthorCharacter = ({ author }) => {
    if (author === AUTHORS[0]) {
      return (
        <div className="author-thumbnail">
          <img
            src={
              descImgArr.find(
                ({ originalName }) => originalName === "eddy-desc.png"
              ).originalImg
            }
          />
        </div>
      )
    }
    if (author === AUTHORS[1]) {
      return (
        <div className="author-thumbnail">
          <Link to={`/tags/jesse`}>
            <img
              src={
                descImgArr.find(
                  ({ originalName }) => originalName === "jesse-desc.png"
                ).originalImg
              }
            />
          </Link>
        </div>
      )
    }
    if (author === AUTHORS[2]) {
      return (
        <div className="author-thumbnail">
          <img
            src={
              descImgArr.find(
                ({ originalName }) => originalName === "kay-desc.png"
              ).originalImg
            }
          />
        </div>
      )
    }
    if (author === AUTHORS[3]) {
      return (
        <div className="author-thumbnail">
          <img
            src={
              descImgArr.find(
                ({ originalName }) => originalName === "robbie-desc.png"
              ).originalImg
            }
          />
        </div>
      )
    }
    return <></>
  }

  const AuthorDesc = ({ author }) => {
    if (author === AUTHORS[0]) {
      return (
        <div className="author-desc">
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          <div className="author-link-wrapper">
            <AuthorLink link="" linkLogoType="fb" />
            <AuthorLink link="" linkLogoType="brunch" />
            <AuthorLink link="" />
          </div>
        </div>
      )
    }
    if (author === AUTHORS[1]) {
      return (
        <div className="author-desc">
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          <div className="author-link-wrapper">
            <AuthorLink link="" linkLogoType="fb" />
            <AuthorLink link="" linkLogoType="brunch" />
          </div>
        </div>
      )
    }
    if (author === AUTHORS[2]) {
      return (
        <div className="author-desc">
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          <div className="author-link-wrapper">
            <AuthorLink link="" linkLogoType="fb" />
            <AuthorLink link="" linkLogoType="brunch" />
            <AuthorLink link="" />
          </div>
        </div>
      )
    }
    if (author === AUTHORS[3]) {
      return (
        <div className="author-desc">
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          작가소개, 나는 너무 멋져 끝내준다 작가소개, 나는 너무 멋져 끝내준다
          <div className="author-link-wrapper">
            <AuthorLink link="" linkLogoType="fb" />
            <AuthorLink link="" linkLogoType="brunch" />
            <AuthorLink link="" />
          </div>
        </div>
      )
    }
    return <></>
  }

  const AuthorLink = ({ linkLogoType, link }) => {
    // const [linkLogo, setLinkLogo] = useState()
    let _link
    switch (linkLogoType) {
      case "fb":
        _link = descImgArr.find(
          ({ originalName }) => originalName === "fb-desc.png"
        ).originalImg

        break

      case "brunch":
        _link = descImgArr.find(
          ({ originalName }) => originalName === "brunch-desc.png"
        ).originalImg

        break

      default:
        _link = descImgArr.find(
          ({ originalName }) => originalName === "link-desc.png"
        ).originalImg

        break
    }

    return (
      <div className="author-link">
        <a href={link}>
          <img src={_link} alt="" />
        </a>
      </div>
    )
  }

  return (
    <Router>
      {isSmall ? (
        <div className="author-description-wrapper-small">
          <AuthorCharacter author={tag} />
          <span className="author-name">{new String(tag).toUpperCase()}</span>
        </div>
      ) : (
        <div className="author-description-wrapper">
          <AuthorCharacter author={tag} />
          <AuthorDesc author={tag} />
        </div>
      )}
    </Router>
  )
}

export default AuthorDescription

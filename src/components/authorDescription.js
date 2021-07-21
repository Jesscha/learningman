import { divide } from "lodash"
import React, { useMemo } from "react"
import { AUTHORS } from "../constants/constant"
import "./authorDescription.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const AuthorDescription = ({ tag, isSmall, isBorderTop, isBorderBottom }) => {
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
          <Link to={`/tags/eddy`}>
            <img
              src={
                descImgArr.find(
                  ({ originalName }) => originalName === "eddy-desc.png"
                ).originalImg
              }
            />
          </Link>
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
          <Link to={`/tags/kay`}>
            <img
              src={
                descImgArr.find(
                  ({ originalName }) => originalName === "kay-desc.png"
                ).originalImg
              }
            />
          </Link>
        </div>
      )
    }
    if (author === AUTHORS[3]) {
      return (
        <div className="author-thumbnail">
          <Link to={`/tags/robbie`}>
            <img
              src={
                descImgArr.find(
                  ({ originalName }) => originalName === "robbie-desc.png"
                ).originalImg
              }
            />
          </Link>
        </div>
      )
    }
    return <></>
  }

  const AuthorDesc = ({ author }) => {
    if (author === AUTHORS[0]) {
      return (
        <div className="author-desc">
          스타트업, VC, 창업, 기자를 거쳐 PD로 일하고 있습니다. 글을 잘 쓰고
          싶어서 매일 씁니다. 더 자라기 위한 고민을 많이 합니다. 배우는 걸
          좋아해서 러닝맨을 시작했습니다. 꿈은 베스트셀러 작가.
          <div className="author-link-wrapper">
            <AuthorLink
              link="https://www.facebook.com/bumgeun.eddy.song/"
              linkLogoType="fb"
            />
            <AuthorLink
              link="https://brunch.co.kr/@bumgeunsong"
              linkLogoType="brunch"
            />
          </div>
        </div>
      )
    }
    if (author === AUTHORS[1]) {
      return (
        <div className="author-desc">
          증권사 연구원 -> 블록체인 컨설팅회사 창업 -> 개발자. 커리어 전환의
          달인입니다. 차분한 마음으로 꾸준히 하면 어디서든 두각을 드러낼 수
          있다고 믿습니다. 개발 실력, 마음의 자유에 관심이 많습니다. 애쓰지
          않으면서도 열심히 사는 삶을 추구합니다.
          <div className="author-link-wrapper">
            <AuthorLink
              link="https://www.facebook.com/cha.jesse"
              linkLogoType="fb"
            />
          </div>
        </div>
      )
    }
    if (author === AUTHORS[2]) {
      return (
        <div className="author-desc">
          스타트업과 컨설팅을 거쳐 현재 정유사에서 해외영업을 담당하고 있습니다.
          IT 산업과 에너지 산업, 블록체인 및 기술 기반 프로덕트에 관심이
          많습니다. 어릴 적부터 꿈은 대통령이지만 대통령이 되지 않아도 행복할 수
          있는 사람으로 성장하려고 노력합니다.
          <div className="author-link-wrapper">
            <AuthorLink link="https://fb.com/withoutyoung" linkLogoType="fb" />
          </div>
        </div>
      )
    }
    if (author === AUTHORS[3]) {
      return (
        <div className="author-desc">
          강아지처럼 살고 싶은 사람입니다. 그래서 영어 이름도 우리집 강아지
          이름과 같습니다. 은하영웅 전설의 양 웬리처럼 전쟁을 누구보다 잘아는
          전략가이지만 사실은 전쟁을 싫어하는 그런 사람이 되고 싶습니다. 사람을
          잘 관찰하고 싶습니다.
          <div className="author-link-wrapper">
            <AuthorLink
              link="https://www.facebook.com/robbieinertia"
              linkLogoType="fb"
            />
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
        <a href={link} target={"blank"}>
          <img src={_link} alt="" />
        </a>
      </div>
    )
  }

  return (
    <>
      {isSmall ? (
        <div className="author-description-wrapper-small">
          <AuthorCharacter author={tag} />
          <span className="author-name">{new String(tag).toUpperCase()}</span>
        </div>
      ) : (
        <div
          className="author-description-wrapper"
          style={{
            borderTop: isBorderTop ? "1px solid rgba(0, 0, 0, 0.2)" : "",
            borderBottom: isBorderBottom ? "1px solid rgba(0, 0, 0, 0.2)" : "",
          }}
        >
          <AuthorCharacter author={tag} />
          <AuthorDesc author={tag} />
        </div>
      )}
    </>
  )
}

export default AuthorDescription

import styled from "@emotion/styled"
import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton,
  RedditShareButton,
  RedditIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share"
import { useRouter } from "next/router"

const ShareableIcons = () => {
  const { asPath } = useRouter()
  const url =
    typeof window !== "undefined" && window.location.origin
      ? `${window.location.origin}${asPath}`
      : ""

  return (
    <StyledWrapper>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <XIcon size={32} round />
      </TwitterShareButton>
    </StyledWrapper>
  )
}

export default ShareableIcons

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap;
  max-width: 100%;
  gap: 1rem !important;
  justify-content: end;
`

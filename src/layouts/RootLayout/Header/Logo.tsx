import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import Image from "next/image"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <StyledLogo src={CONFIG.logo} width={40} height={40} alt="" />
      <StyledSpan>Code Story Bro</StyledSpan>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``

const StyledLogo = styled(Image)`
  display: inline-block;
  vertical-align: middle;
`
const StyledSpan = styled.span`
  margin-left: 8px;
`

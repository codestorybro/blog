import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import Image from "next/image"
import useScheme from "src/hooks/useScheme"

const Logo = () => {
  const [scheme, setScheme] = useScheme()

  return (
    <StyledWrapper href="/" aria-label={CONFIG.profile.name}>
      <StyledLogo
        src={scheme === "light" ? CONFIG.logoLight : CONFIG.logoDark}
        width={40}
        height={40}
        alt=""
      />
      <StyledSpan>{CONFIG.profile.name}</StyledSpan>
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
  font-weight: 900;
  color: ${({ theme }) => theme.colors.logoColor};
`

import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <StyledLink href={link.to}>{link.name}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledLink = styled(Link)`
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.blue8};
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 16px;
  color: #fff;
  -webkit-transition: background-color 150ms;
  -ms-transition: background-color 150ms;
  transition: background-color 150ms;

  :hover {
    background-color: ${({ theme }) => theme.colors.blue7};
  }
`

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`

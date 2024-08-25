import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import {
  AiFillLinkedin,
  AiOutlineDiscord,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineX,
} from "react-icons/ai"
import { Emoji } from "src/components/Emoji"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>💬</Emoji> Contact
      </div>
      <div className="mid">
        <div className="wrapper">
          <Image
            priority
            src={CONFIG.profile.profilePhoto}
            width={90}
            height={90}
            css={{ position: "relative" }}
            alt="profile_image"
          />
          <div className="wrapper">
            <div className="top">{CONFIG.profile.name}</div>
            <div className="mid">{CONFIG.profile.role}</div>
          </div>
        </div>
        <div className="socials">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              aria-label="Github"
            >
              <AiOutlineGithub className="icon" />
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <AiOutlineInstagram className="icon" />
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              css={{ overflow: "hidden" }}
              aria-label="Email"
            >
              <AiOutlineMail className="icon" />
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="icon" />
            </a>
          )}
          {CONFIG.profile.discord && (
            <a
              href={`${CONFIG.profile.discord}`}
              rel="noreferrer"
              target="_blank"
              aria-label="Discord"
            >
              <AiOutlineDiscord className="icon" />
            </a>
          )}
          {CONFIG.profile.x && (
            <a
              href={`${CONFIG.profile.x}`}
              rel="noreferrer"
              target="_blank"
              aria-label="X"
            >
              <AiOutlineX className="icon" />
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    > .wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      > .wrapper {
        // height: fit-content;
        > .top {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-style: italic;
          font-weight: 700;
        }
        > .mid {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
        > .btm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
    > .socials {
      margin-top: 8px;
      display: flex;
      0.75rem;
      align-items: center;

      a {
        display: flex;
        padding: 0.5rem;
        gap: 0.75rem;
        align-items: center;
        border-radius: 3rem;
        color: ${({ theme }) => theme.colors.gray11};
        cursor: pointer;
        -webkit-transition: all 150ms;
        -ms-transition: all 150ms;
        transition: all 150ms;

        :hover {
          color: ${({ theme }) => theme.colors.gray12};
          background-color: ${({ theme }) => theme.colors.gray5};
        }
        .icon {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .name {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`

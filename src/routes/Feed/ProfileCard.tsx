import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineDiscord,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineX,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💬</Emoji> Contact
      </div>
      <div className="content">
        <div className="top">
          <Image
            priority
            src={CONFIG.profile.profilePhoto}
            width={198}
            height={198}
            alt="profile_image"
          />
        </div>
        <div className="mid">
          <div className=" name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
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

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      text-align: center;
      position: relative;
      width: 100%;
    }
    .mid {
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-style: italic;
        font-weight: 700;
      }
      .role {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
    }
    .socials {
      justify-content: center;
      margin-top: 4px;
      display: flex;
      gap: 0.75rem;
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

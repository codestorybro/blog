import { CONFIG } from "../../site.config"
import { NextPageWithLayout, TPosts, TTags } from "../types"
import CustomError from "../routes/Error"
import MetaConfig from "src/components/MetaConfig"

type Props = {
  tags: TTags
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <CustomError />
}

NotFoundPage.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          pageTitle: `${CONFIG.profile.name} — 404 not found`,
          description: CONFIG.blog.description,
          type: "website",
          url: CONFIG.link,
          image: CONFIG.blog.image,
        }}
      />
      {page}
    </>
  )
}

export default NotFoundPage

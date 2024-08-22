import Error500 from "src/routes/Error/error500"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout, TPosts, TTags } from "../types"

import MetaConfig from "src/components/MetaConfig"

type Props = {
  tags: TTags
  posts: TPosts
}

const Error500Page: NextPageWithLayout<Props> = () => {
  return <Error500 />
}

Error500Page.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          pageTitle: `${CONFIG.profile.name} — 500 internal server error`,
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

export default Error500Page

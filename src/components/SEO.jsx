import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url = '', image = '/images/logo/ezitech-logo.png' }) {
  const site     = 'https://ezitech.org'
  const siteName = 'Ezitech'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} || Software, AI & Digital Innovation`
  const fullDesc  = description || 'Ezitech — Software Development, AI Solutions, and Digital Innovation.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description"         content={fullDesc} />
      <link rel="canonical"            href={`${site}${url}`} />
      <meta property="og:title"        content={fullTitle} />
      <meta property="og:description"  content={fullDesc} />
      <meta property="og:image"        content={`${site}${image}`} />
      <meta property="og:url"          content={`${site}${url}`} />
      <meta property="og:type"         content="website" />
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image"       content={`${site}${image}`} />
    </Helmet>
  )
}

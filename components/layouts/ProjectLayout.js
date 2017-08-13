import Head from 'next/head'
import Typekit from 'react-typekit'

import CSSTag from 'components/CSSTag'
import MainNavigation from 'components/MainNavigation'
import CaseStudyPager from 'components/CaseStudyPager'
import Footer from 'components/Footer'

export default ({ children, title = 'This is the default title', currentProject }) => (
  <div>
    <Head>
      <title>
        { title } { (process.env.NODE_ENV === 'development') ? 'DEVELOPMENT' : '' }
      </title>

      <meta charSet='utf-8' />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <Typekit kitId="wpl2elk" />
      <CSSTag />
    </Head>

    { children }

    <CaseStudyPager current={ currentProject } />

    <Footer />

  </div>
)

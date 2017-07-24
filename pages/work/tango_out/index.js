import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import MainNavigation from 'components/MainNavigation'
import Footer from 'components/Footer'

import { Link } from '../../../routes'

const dev = process.env.NODE_ENV === 'development'
const prod = !dev

export default class extends React.Component {
  static async getInitialProps ({ query, req }) {
    return {}
  }

  render () {
    return (
      <div>
        <Head>
          <title>Sketchpacks</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          { prod && <link rel='stylesheet' href={'/static/main.css'} /> }

          <Typekit kitId="wpl2elk" />
        </Head>

        <MainNavigation />

        <section className={'c-page-header u-bgcolor-tango u-angled--bottom'}>
          <div className={'o-container o-container'}>
            <div className={'o-grid'}>
              <div className="o-grid__col">

                <h1 className={'o-type-promo'}>Voice calls for everyone</h1>
                <p className={'o-type-lead'}>A simplified calling experience was only the beginning</p>

              </div>
            </div>
          </div>
        </section>

        <section className={'c-cover'}>
          <div className={'o-container o-container--narrow'}>
            <div className={'o-grid'}>
              <div className="o-grid__col">

                <div className={'o-page-content'}>
                  <h2 className={'o-type-display-1 u-mb-small u-weight-normal'}>
                    Challenges
                  </h2>

                  <h3>
                    Finding opportunities in obstacles
                  </h3>

                  <h4 className={'o-type-title u-color-title'}>
                    Striking a balance
                  </h4>
                  <p className={'o-type-body-2 u-color-body-2'}>
                    Tango Out needed to be accessible, yet unobtrusive. People
                    endured too much friction trying to access a feature buried
                    three UI layers deep. Tango Out needed to live along side the
                    free calling features without overshadowing it.
                  </p>

                  <h4 className={'o-type-title u-color-title'}>
                    Distinguished, not different
                  </h4>
                  <p className={'o-type-body-2 u-color-body-2'}>
                    Free Video & Voice Calls needed to live along side Tango Out
                    Calls without causing confusion. People had a difficult time
                    understanding the difference between the two types of calls.
                    Both types of calling functionality needed to be equal, yet
                    distinguishable.
                  </p>

                  <h4 className={'o-type-title u-color-title'}>
                    Build a healthy habit
                  </h4>
                  <p className={'o-type-body-2 u-color-body-2'}>
                    Tango Out's true competitor wasn't other calling apps. It
                    needed to be easier to use than the native dialing experience
                    on both Android and iOS. We wanted to replace the habit of
                    using the native dialing experience when you need to make a
                    call.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    )
  }
}

import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import { Link } from '../routes'

import CSSTag from 'components/CSSTag'
import MainNavigation from 'components/MainNavigation'
import Footer from 'components/Footer'

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
          <title>Adam Kirkwood Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <CSSTag />

          <Typekit kitId="wpl2elk" />
        </Head>


        <MainNavigation />

        <section className={'c-cover'}>
          <div className={'o-container'}>
            <div className={'o-grid'}>
              <div className="o-grid__col u-2/3">
                <h1 className={'o-type-display-2 u-mb-small u-weight-normal'}>
                  Hello. I&#39;m Adam Kirkwood, <br />a digital product designer.
                </h1>

                <p className={'o-type-body-2 u-color-body-2'}>
                  I believe in a world where products are designed to imrove the
                  human experience. I motivate this vision by listening deeply,
                  empathizing absolutely, and executing strategically.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

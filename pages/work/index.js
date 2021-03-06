import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import projectsData from '../../data/work.json'
import { Link } from '../../routes'
import axios from 'axios'

import CSSTag from 'components/CSSTag'
import MainNavigation from 'components/MainNavigation'
import Footer from 'components/Footer'
import ProjectThumbnail from 'components/ProjectThumbnail'

const dev = process.env.NODE_ENV === 'development'
const prod = !dev

export default class extends React.Component {
  static async getInitialProps ({ query, req }) {
    const dribbble = await axios.get(`https://api.dribbble.com/v1/users/xyentific/shots?access_token=51fd1c350b075c98d174cd31e63287c563180593801b04b28207f3c13dc9d35b`)

    return {
      data: {
        projects: projectsData,
        dribbble: dribbble.data
      }
    }


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

        <div className={'o-page-header'}>
          <section className={'c-cover'}>
            <div className={'o-container u-pt-ultra u-pb-mega'}>
              <div className={'o-grid'}>
                <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                  <h2 className={'o-type-display-2 u-color-headline'}>Portfolio</h2>
                </div>

                <div className="o-grid__col u-1/1 u-2/3@sm  o-page-content">
                  <p className={'o-type-body-2 u-color-body-2'}>
                    I&apos;ve worked on projects of all sizes &mdash; from
                    Tango&apos;s iOS and Android mobile clients serving 330
                    million users, to features across Recurly's mission&ndash;critical
                    subscription management platform that processes millions of
                    dollars every day.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>


        <section className={'c-cover u-mb-large'}>
          <div className={'o-container'}>
            <div className={'o-grid'}>
              { Object.keys(this.props.data.projects).map((project,idx) => {
                return (
                  <div className={'o-grid__col u-1/1 u-1/2@sm u-mb-small o-project-preview'}>
                    <ProjectThumbnail
                      title={ this.props.data.projects[project].title }
                      logline={ this.props.data.projects[project].logline }
                      slug={ project }
                      path={ `work/${project}`}
                      />
                  </div>
                )
              })}
            </div>

          </div>
        </section>


        <section className={'c-cover u-mt-mega u-mb-large'}>
          <div className={'o-container'}>
            <div className={'o-grid o-grid--wide u-mb-large'}>
              <div className={'o-grid__col u-1/1'}>
                <h2 className={'o-type-display-2 u-color-headline'}>Work In Progress</h2>
              </div>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Sometimes I post work in progress to share with everyone on Dribbble.
                </p>
              </div>
            </div>

            <div className={'o-grid'}>
              { this.props.data.dribbble.map((shot, idx) => {
                if (idx > 5) return

                return (
                  <div className="o-grid__col u-1/1 u-1/3@sm u-mb-small">
                    <a href={shot.html_url} target="_blank" title={shot.title}>
                      <img
                        alt={shot.title}
                        src={shot.animated ? shot.images.hidpi : shot.images.normal}
                      />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className={'o-container'}>
          <div className={'o-grid o-grid--wide'}>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

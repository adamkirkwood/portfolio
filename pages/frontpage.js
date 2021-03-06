import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

import projectsData from '../data/work.json'
import { Link } from '../routes'
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
            <div className={'u-pt-mega u-pb-large'}>
              <div className={'o-grid'}>
                <div className="o-grid__col u-1/1 u-1/2@md u-mb-large">
                  <img src="/static/images/portrait-large2.png" />
                </div>

                <div className="o-grid__col u-1/1 u-1/2@md u-ph-medium u-ph-large@sm u-ph-large@sm">
                  <h1 className={'o-type-display-1 u-mb-medium u-weight-normal'}>
                    👋🏽 I&apos;m Adam Kirkwood, <br />a digital product designer.
                  </h1>

                  <p className={'o-type-headline u-color-body-2 u-mb-small'}>
                    Currently I work as a product designer at IBM.
                  </p>

                  <p className={'o-type-headline u-color-body-2 u-mb-small'}>
                    I&apos;m the creator of Sketchpacks&mdash;a nifty macOS app that
                    helps you manage and sync Sketch plugins across machines and teams.
                  </p>

                  <p className={'o-type-headline u-color-body-2 u-mb-small'}>
                    Previously, I&apos;ve led product design and strategy
                    for small startups and enterprise&ndash;level companies
                    such as Tango, Recurly, Viralheat, and Mochimedia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>


        <section className={'c-cover u-mt-medium u-mb-large'}>
          <div className={'o-container'}>
            <div className={'o-grid u-mb-large'}>
              <div className={'o-grid__col u-1/1'}>
                <h2 className={'o-type-display-2 u-color-headline'}>Recent Work</h2>
                  <p className={'o-type-body-2 u-color-body-1'}>
                    Here&apos;s a sampling of work I had the pleasure of working on
                  </p>
              </div>
            </div>

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


        <section className={'c-cover u-mt-mega u-mb-mega'}>
          <div className={'o-container'}>
            <div className={'o-grid o-grid--wide u-mb-large'}>
              <div className={'o-grid__col u-1/1'}>
                <h2 className={'o-type-display-2 u-color-headline'}>Work In Progress</h2>
              </div>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  I sometimes share sneak peaks behind my design process on <a href="https://dribbble.com/xyentific" target="_blank">Dribbble</a>
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

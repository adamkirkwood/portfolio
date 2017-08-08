import React from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'

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
            <div className={'o-container u-pt-ultra u-pb-large'}>
              <div className={'o-grid'}>
                <div className="o-grid__col u-1/1 u-2/3@sm">
                  <h1 className={'o-type-display-2 u-mb-small u-weight-normal'}>
                    👋🏽 I&apos;m Adam Kirkwood, <br />a digital product designer.
                  </h1>

                  <p className={'o-type-headline u-color-body-2 u-mb-small'}>
                    Currently I work as a product designer at IBM.
                  </p>

                  <p className={'o-type-headline u-color-body-2 u-mb-small'}>
                    Creator of Sketchpacks, a macOS menu bar app that
                    helps Sketch users discover and manage plugins.
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


        <section className={'c-cover u-mt-mega u-mb-large'}>
          <div className={'o-container'}>
            <div className={'o-grid u-mb-large'}>
              <div className={'o-grid__col u-1/1'}>
                <h2 className={'o-type-display-2 u-color-headline'}>Recent Work</h2>
                  <p className={'o-type-body-2 u-color-body-1'}>
                    Here&apos;s a sampling of work I had the pleasure of working on
                  </p>
              </div>
            </div>

            <div className={'o-grid o-grid--nospace'}>
              <div className={'o-grid__col u-1/1 u-1/2@sm o-project-preview'}>
                <ProjectThumbnail
                  title={'Sketchpacks'}
                  logline={'Sketch plugin management'}
                  slug={'sketchpacks'}
                  path={'work/sketchpacks'}
                />
              </div>

              <div className={'o-grid__col u-1/1 u-1/2@sm o-project-preview'}>
                <ProjectThumbnail
                  title={'Tango Video Calling'}
                  logline={'Video Calling for iOS and Android'}
                  slug={'tango-video-calling'}
                  path={'work/tango-video-calling'}
                />
              </div>

              <div className={'o-grid__col u-1/1 u-1/2@sm o-project-preview'}>
                <ProjectThumbnail
                  title={'Tango Out'}
                  logline={'Voice Calling for iOS and Android'}
                  slug={'tango-out'}
                  path={'work/tango-out'}
                />
              </div>

              <div className={'o-grid__col u-1/1 u-1/2@sm o-project-preview'}>
                <ProjectThumbnail
                  title={'Recurly'}
                  logline={'Enterprise-class subscription billing platform'}
                  slug={'recurly'}
                  path={'work/recurly'}
                />
              </div>
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
                  I sometimes share sneak peaks behind my design process on <a href="https://dribbble.com/xyentific" target="_blank">Dribbble</a>
                </p>
              </div>
            </div>

            <div className={'o-grid o-grid--nospace'}>
              { this.props.data.dribbble.map((shot, idx) => {
                if (idx > 5) return

                return (
                  <div className="o-grid__col u-1/1 u-1/3@sm">
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

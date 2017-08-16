import React from 'react'

import MainNavigation from 'components/MainNavigation'

import ProjectLayout from 'components/layouts/ProjectLayout'

import { Link } from '../../../routes'

export default class extends React.Component {
  static async getInitialProps ({ query, req, asPath }) {
    return {
      currentProject: asPath.split('/').slice(-1)[0]
    }
  }

  render () {
    return (
      <ProjectLayout title={'Tango Video Calling'} currentProject={ this.props.currentProject }>
        <MainNavigation inverse />

        <article className={'l-case-study'}>

          <div className={'u-angled--bottom o-page-header o-page-header--tango'}>
            <section className={'o-container u-pt-ultra'}>
              <header className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/1 u-mb-large'}>
                  <h1 className={'o-type-promo u-mb-medium u-2/3@sm'}>Cross&ndash;platform video calling</h1>
                  <p className={'o-type-lead u-1/2@sm'}>
                    Tango provides free video calls to over 330,000,000 people around
                    the world. Available for iOS and Android users.
                  </p>
                </div>
              </header>
            </section>
          </div>


          <section className={'o-container u-pt-mega u-mt-large@sm c-case-study__lead'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/2@md c-case-study__lead__media'}>
                <img
                  src="/static/work/tango-video-calling/tango-video-call-preview@2x.png"
                  width="375"
                  className={''}
                />
              </div>

              <div className={'o-grid__col u-1/1 u-1/2@sm o-page-content c-case-study__content'}>
                <h2 className={'o-type-display-1 u-color-headline'}>Tango</h2>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Tango took the Android and iOS app market by storm as it debuted
                  the first cross&ndash;platform video calling experience.
                  Much of its success grew from the rich and engaging content
                  that is accessible during a video call.
                </p>
              </div>
            </div>
          </section>





          <section className={'o-container u-mt-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline'}>The Challenge</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Millions of people around the world rely on Tango
                  Video Calling to keep their meaningful relationships with
                  friends &amp; family.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Tango needed to breathe new life into its outdated
                  cross&ndash;platform video calling experience.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I led the UX strategy and visual design for the new Tango Video
                  Calling experience, surfacing engaging content and focusing
                  on meaningful core interactions.
                </p>
              </div>
            </div>
          </section>


          <section className={'o-container u-pb-mega u-mt-ultra'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline'}>The<br /> Approach</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  After many in&ndash;depth user interviews, I found three major
                  obstactles that seemed to hinder the average person&apos;s ability
                  to fully immerse themselves within a Tango Video Calling experience.
                </p>
              </div>
            </div>
          </section>


          <section className={'o-container o-container--wide u-mb-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h3 className={'o-type-headline u-color-headline'}>
                  Discovery
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Call durations for people who engaged with the
                  content were much longer than those who didn&apos;t. My hypothesis
                  was that providing more obvious ways of accessing the content
                  will improve engagement and call durations.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h3 className={'o-type-headline u-color-headline'}>
                  Browsing
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Given the nature of the video call, people ended up focusing on
                  trying to understand the interface rather than enjoying the
                  shared content with their friends and family.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h3 className={'o-type-headline u-color-headline'}>
                  Navigation
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Solving for a good Discovery and Browsing experience meant providing
                  easy ways of navigating to and from that content while keeping
                  the user engaged with whom they&apos;re speaking with.
                </p>
              </div>
            </div>
          </section>


          <section className={'o-container'}>
            <figure className={'u-mb-mega'}>
              <img
                src="/static/work/tango-video-calling/content-discovery.jpg"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                Access engaging content from the main video screen
              </figcaption>
            </figure>
          </section>

          <section className={'o-container'}>
            <figure className={'u-mb-mega'}>
              <img
                src="/static/work/tango-video-calling/content-browsing.jpg"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                Swiping up created a larger viewing area for the user to browse content
              </figcaption>
            </figure>
          </section>

          <section className={'o-container'}>
            <figure className={'u-mb-mega'}>
              <img
                src="/static/work/tango-video-calling/content-navigation.jpg"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                Navigating between content uses a familiar swipe interaction
              </figcaption>
            </figure>
          </section>


          <section className={'o-container'}>
            <figure className={'u-mb-mega'}>
              <img
                src="/static/work/tango-video-calling/framer-prototype.png"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                Rapid prototyping brought the designs to life, giving confidence to move forward quickly.
              </figcaption>
            </figure>
          </section>


          <section className={'o-container u-pt-ultra u-pb-medium'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/2@sm o-page-content'}>
                <h2 className={'o-type-display-2 u-color-headline u-mb-small'}>
                  The Outcome
                </h2>

                <h3 className={'o-type-headline u-color-headline'}>
                  Designing for tomorrow
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Using a carousel for browsing and navigating content allowed
                  us to avoid dead ends. The user could navigate through an
                  endless cycle of content and not worry about getting lost.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Balance of content and context
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  The content area does not obstruct the entire view of the
                  video call. This acts as a constant reminder for the user that
                  they are still on a video call. It allowed the user to see the
                  applied effects as they played with controls and content.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Progressive advancement
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  The new interface allows for the use of gestures to manipulate
                  and navigate content. However, not all affordances are lost.
                  Users can still tap on content and navigation to reveal content.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-1/2@sm'}>
                <figure>
                  <img
                    src="//giant.gfycat.com/SpitefulAffectionateKusimanse.gif"
                    className={'u-mb-small'}
                  />

                  <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                    Millions of Tango users experience new interactions and capabilities.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-display-2 u-color-headline u-mb-small'}>
                  The Takeaways
                </h2>

                <h3 className={'o-type-headline u-color-headline'}>
                  Manage complexity
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Resisting the urge to shove all the ideas into one prototype
                  was key. It allowed me to validate ideas fast without running
                  into many obstacles. I conveyed short and simple ideas through
                  a handful of prototypes to reduce complexity.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Know your tools
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  I switched between using Framer.js and Principle. I used
                  Framer.js to do a lot of heavy lifting to mimic complex
                  features in my prototypes. I leaned on Principle to convey
                  ideas on simple interactions. Choosing the right tool for the
                  job allows me to move forward with high velocity.
                </p>
              </div>
            </div>
          </section>


        </article>
      </ProjectLayout>
    )
  }
}

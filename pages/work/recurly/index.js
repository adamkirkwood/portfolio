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
      <ProjectLayout title={'Recurly'} currentProject={ this.props.currentProject }>
        <MainNavigation inverse />

        <article className={'l-case-study'}>

          <div className={'u-angled--bottom o-page-header o-page-header--recurly'}>
            <section className={'o-container o-container--wide u-pt-ultra u-pb-large'}>
              <header className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/2'}>
                  <h1 className={'o-type-promo u-mb-medium'}>Recurly</h1>
                  <p className={'o-type-lead u-mb-medium'}>
                    Enterprise&ndash;class subscription management platform
                  </p>
                </div>

                <div className={'o-grid__col u-1/2'}>
                  <img
                    src="/static/work/sketchpacks/app@2x.png"
                    width="370"
                    className={'u-mb-large'}
                  />
                </div>
              </header>
            </section>
          </div>

          <section className={'o-container u-pv-ultra u-mt-mega'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline'}>The Challenge</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Recurly app, a robust recurring billing solution, felt dated
                  at the aesthetic level. Myself and 3 other designers decided
                  to create a new visual foundation to build upon.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                I worked on design visuals down to the nitty gritty details of implementation.
                I focused on identifying and establishing design patterns.
                Coordinating across teams to ensure consistency between design and implemented UI.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-text-center'}>
            <img
              src=""
              className={'u-mb-large'}
            />
          </section>

          <section className={'o-container'}>
            <figure>
              <img
                src="/static/work/recurly/old/subscription-details@2x.png"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                The legacy monolithic app boasted an outdated UI that served
                thousands of business owners.
              </figcaption>
            </figure>
          </section>

          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-display-2 u-color-headline u-mb-small'}>
                  The Approach
                </h2>

                <h3 className={'o-type-headline u-color-headline'}>
                  Be breathe of fresh air
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  The old Recurly app looked dated and felt static. We wanted
                  to improve on the experience by evoking a more modern feel.
                  Doing so meant thinking beyond where we were and to look
                  forward where we wanted to be.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Lower design debt
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Find experiences a long the way that we can improve on without
                  much effort. Just like every engineering team, design teams
                  also incur design debt. This was our chance to reduce our debt
                  and finally scratch that itch.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Create more consistency
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Recurly app had a few eye sores where inconsistency in visual
                  elements and design patterns. We needed to identify and tackle
                  those inconsitencies with new established patterns. Creating
                  consistency within the app will also help lessen the learning
                  curve for new users.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Do no harm
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  First rule of a redesign: Do no harm. This is especially try
                  true when you&apos;re redesigning mission critical software. We
                  decided to move mountains with a spoon, one scoop at a time.
                </p>
              </div>
            </div>
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  The building blocks of tomorrow
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  We established a pattern library for both Photoshop and Sketch.
                  I worked with the client&ndash;side teams in implementing
                  patterns into Angular components.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container'}>
            <figure>
              <img
                src="/static/work/recurly/new/patterns@2x.jpg"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                The Snappy UI Kit captured the initial set of patterns required to
                create features and flows supporting the business owner&apos;s
                mission critical tasks.
              </figcaption>
            </figure>
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Methodical iteration
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Rallying support and excitement is much easier when you can
                  show results. Once we had an internal beta of our new client&ndash;side
                  interface, the momentum began to build. We knew this was just
                  the beginning of changes to come.
                </p>
              </div>
            </div>
          </section>


          <section className={'o-container'}>
            <figure>
              <img
                src="/static/work/recurly/new/accounts@2x.jpg"
                className={'u-mb-small'}
              />

              <figcaption className={'o-type-small u-color-body-1 u-text-center'}>
                Every piece of mission critical software deserves an elegant interface.
              </figcaption>
            </figure>
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-display-2 u-color-headline u-mb-small'}>
                  The Takeaways
                </h2>

                <h3 className={'o-type-headline u-color-headline'}>
                  Power in patterns
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Identifying and establishing patterns is critical in creating
                  consistency across teams. Design patterns allowed us to iterate
                  on ideas, experience flows, and visuals with velocity. Focused
                  and isolated changes were essential in tactical design iterations.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  New ways of writing client-side code
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  I was still ramping up on Angular.js at the time. However, I
                  saw great value in understanding the fundamental concepts of
                  such frameworks. Knowing the constraints of each will allow
                  for proper innovation in future challenges.
                </p>
              </div>
            </div>
          </section>

        </article>
      </ProjectLayout>
    )
  }
}

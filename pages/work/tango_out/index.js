import React from 'react'

import MainNavigation from 'components/MainNavigation'

import ProjectLayout from 'components/layouts/ProjectLayout'

import { Link } from '../../../routes'

export default class extends React.Component {
  static async getInitialProps ({ query, req }) {
    return {}
  }

  render () {
    return (
      <ProjectLayout title={'Tango Out'}>

        <MainNavigation inverse />

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

        <section className={'o-container u-pt-ultra u-pb-mega'}>
          <div className={'o-grid'}>
            <div className={'o-grid__col u-1/1 u-1/4@sm'}>
              <h2 className={'o-type-display-1 u-color-headline'}>The Challenge</h2>
            </div>
            <div className={'o-grid__col u-1/1 u-3/4@sm o-page-content'}>
              <p className={'o-type-body-2 u-color-body-1'}>
                I led the UX strategy and visual design for Tango Out. A feature
                used by millions of people to make phone calls around the world
                on both Android and iOS.
              </p>

              <p className={'o-type-body-2 u-color-body-1'}>
                I simplified the calling experience by focusing on meaningful
                core interactions that create value. A clear and usable
                experience was the icing on the cake.
              </p>
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

      </ProjectLayout>
    )
  }
}

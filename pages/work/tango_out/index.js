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
      <ProjectLayout title={'Tango Out'} currentProject={ this.props.currentProject }>
        <MainNavigation />

        <article className={'l-case-study'}>

          <div className={'u-angled--bottom o-page-header o-page-header--tango-out'}>
            <section className={'o-container o-container--wide u-pt-ultra u-pb-large'}>
              <header className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/2'}>
                  <h1 className={'o-type-promo u-mb-medium u-color-gray-9'}>Tango Out</h1>
                  <p className={'o-type-lead u-mb-medium u-color-gray-8'}>
                    Make phone calls around the world. For free.
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
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline'}>The Challenge</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Tango wanted to round&ndash;out the calling experience that brought
                  it much success during it&apos; initial launch by bringing in
                  free &amp; paid voice calling.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I led the product strategy and visual design for Tango Out. A feature
                  used by millions of people to make phone calls around the world
                  on both Android and iOS.
                </p>
              </div>
            </div>
          </section>

          <div className={'u-bgcolor-gray-0'}>
            <section className={'o-container o-container--wide u-pt-mega u-pb-mega u-mv-large'}>
              <div className={'o-grid o-grid--wide o-grid--cards'}>

                <div className={'o-grid__col u-1/1 u-mb-large u-text-center@sm o-page-content'}>
                  <h2 className={'o-type-display-2 u-color-headline u-mb-small'}>The Approach</h2>

                  <p className={'o-type-body-2 u-color-body-1 u-push-1/4@sm u-pull-1/4@sm'}>
                    I did just enough research to have a solid understanding of
                    habits and motivations. I synthesized learnings from recent
                    user and market studies to drive our planning phase. Below
                    are the key insights that motivated the initial version
                    of Tango Out's relaunch:
                  </p>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
                    <div className={'u-mb-small u-uppercase u-weight-medium'}>Smarter defaults</div>

                    <p className={'o-type-body-2 u-color-body-1'}>
                      I believe people want simple but useful default actions
                      that yield value immediately. People want to be able to
                      take action without needing to weight the effort required.
                      They want simple tools that allow them to do a lot.
                    </p>
                  </div>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
                    <div className={'u-mb-small u-uppercase u-weight-medium'}>Improved discoverability</div>

                    <p className={'o-type-body-2 u-color-body-1'}>
                      I believe people will make more phone calls when the
                      effort required to take action is low. The dial pad should
                      be within reach if they want to call someone who isn't on
                      Tango already. Having the dial pad available, but not be
                      obtrusive will play a key role with feature adoption.
                    </p>
                  </div>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
                    <div className={'u-mb-small u-uppercase u-weight-medium'}>Evoke positive emotions</div>

                    <p className={'o-type-body-2 u-color-body-1'}>
                      I believe people generate a negative emotion when they
                      either miss a phone call or fail to reach someone. Tango
                      Out should help people to make a successful phone call
                      after the first their failed attempt. Successful
                      connections would lead to better conversions for inviting
                      others.
                    </p>
                  </div>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
                    <div className={'u-mb-small u-uppercase u-weight-medium'}>Mitigate fear</div>

                    <p className={'o-type-body-2 u-color-body-1'}>
                      I believe Callers who do not buy credits do not want to
                      feel burdened by having to keep track of credits. As the
                      old saying goes, "out of sight, out of mind." A person's
                      Credit Balance is only important to them when they actually
                      have a balance.
                    </p>
                  </div>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
                    <div className={'u-mb-small u-uppercase u-weight-medium'}>Confusing call methods</div>

                    <p className={'o-type-body-2 u-color-body-1'}>
                      People had a difficult time understanding differences between
                      Tango-to-Tango calls and Tango Out calls. Not only did they
                      not know which calling feature they were using when trying to
                      make a call. They also didn't know when to use either feature.
                    </p>
                  </div>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
                    <div className={'u-mb-small u-uppercase u-weight-medium'}>Fear &amp; Credits</div>

                    <p className={'o-type-body-2 u-color-body-1'}>
                      Many people showed concern about the costs of calling someone.
                      Whether it was free video and voice calls or Tango Out. They
                      ended up being fearful even when making free calls. This had
                      to change.
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </div>


          <section className={'o-container u-pt-ultra u-pb-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline'}>The Outcome</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  After 4 months of rapid iterations on both the design and the builds,
                  the app is now at 4 and a half stars in Apple&apos;s app store.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I simplified the calling experience by focusing on meaningful
                  core interactions that create value. A clear and usable
                  experience was the icing on the cake.
                </p>
              </div>
            </div>
          </section>


          <section className={'o-container o-container--narrow u-pt-large u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Accessible when needed, out of the way when you don't
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  At the beginning, we had the assumption that having the dial
                  pad open from the start would be clear. I decided to keep the
                  dial pad hidden until the user showed clear intent of wanting
                  to dial. Tapping on the FAB revealed the dial pad distinguishing
                  free calls and Tango Out.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide'}>
            <img
              src="/static/work/tango-out/execution.png"
              className={'u-mb-large'}
            />
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Focused on making successful connections
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  When the dial pad isn't open, the focus is on the Call Log.
                  The call log lists every call made, received, or missed.
                  Highlighted entries act as subtle nudges to take care of
                  missed calls.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-text-center'}>
            <img
              src="/static/work/tango-out/recent-calls-expanded.jpg"
              width="320"
              className={'u-mb-large'}
            />
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Returning missed calls is a tap away
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  When it comes to being helpful, timing and context is
                  essential. No one likes interruptions when the timing or
                  context is out of place. We wanted to be helpful when you need
                  it, but not overbearing when you don't.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  A quick call back option presents itself if you check your
                  phone within minutes of missing a phone call. This experience
                  enhances ability at the right time within the right context.
                  We'll help you make a successful connection with best effort
                  possible.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-text-center'}>
            <img
              src="/static/work/tango-out/missed-call-just-now.jpg"
              width="320"
              className={'u-mb-large'}
            />
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Calculating time shouldn’t take long
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  We all catch ourselves spinning wheels parsing timestamps at
                  times. Sometimes its quick, and at other times it feels like
                  a lot of cognitive load. We decided to provide contextual
                  timestamps in buckets of time we all ready sort by.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  "Just now" timestamps gave people the feeling of being able
                  to return the missed call and having a chance having a
                  successful phone call.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-text-center'}>
            <img
              src="/static/work/tango-out/timestamps@2x.jpg"
              width="720"
              className={'u-mb-large'}
            />
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Deferred decision making
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Using the call log defaults to using the last call method used
                  during the last call. The caller no longer has to worry about
                  which calling method to use. The user is presented with call
                  options in the situation where a contact qualifies for various
                  call methods or numbers.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-text-center'}>
            <img
              src="/static/work/tango-out/calling-options.jpg"
              width="320"
              className={'u-mb-large'}
            />
          </section>


          <section className={'o-container o-container--narrow u-pt-ultra u-pb-medium'}>
            <div className={'o-grid'}>
              <div className={'o-grid__col u-1/1 o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>
                  Quickly find who you want to talk to
                </h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  We gave the user multiple ways of find who they wanted to call.
                  Android's T9 search capability was a common behavior pattern
                  among our Android users. Match-based search was provided for
                  both iOS and Android users.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container u-text-center'}>
            <img
              src="/static/work/tango-out/search.jpg"
              className={'u-mb-large'}
            />
          </section>

          <section className={'o-container u-pt-ultra u-pb-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline'}>The Takeaways</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <h3 className={'o-type-headline u-color-headline'}>
                  Quid pro quo
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Asking the user to do something for you is much easier when you
                  leave them with a good experience. The lasting impression of
                  quality and accomplishment leads for sharing without much effort.
                  Successful calls led to more invites sent and conversions.
                </p>

                <h3 className={'o-type-headline u-color-headline'}>
                  Only a means to an end
                </h3>
                <p className={'o-type-body-2 u-color-body-1'}>
                  The real experience that people attach value to was the actual
                  call itself. The responsibility of the dialing experience is to
                  set the perceived speed of making a phone call. This accounted
                  for half of the entire calling experience from end to end.
                </p>
              </div>
            </div>
          </section>


        </article>
      </ProjectLayout>
    )
  }
}

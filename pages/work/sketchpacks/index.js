import React from 'react'

import MainNavigation from 'components/MainNavigation'
import JobStoryCard from 'components/JobStoryCard'
import PersonaCard from 'components/PersonaCard'

import ProjectLayout from 'components/layouts/ProjectLayout'

import { Link } from '../../../routes'

export default class extends React.Component {
  static async getInitialProps ({ query, req }) {
    return {}
  }

  render () {
    return (
      <ProjectLayout title={'Sketchpacks'}>

        <MainNavigation inverse />

        <article className={'l-case-study'}>

          <div className={'u-angled--bottom o-page-header o-page-header--sketchpacks'}>
            <section className={'o-container o-container--wide u-pt-ultra u-pb-large'}>
              <header className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/2'}>
                  <h1 className={'o-type-promo u-mb-medium'}>Sketchpacks</h1>
                  <p className={'o-type-lead u-mb-medium'}>
                    A macOS app that empowers users to manage and sync
                    their Sketch plugins across machines and teams.
                  </p>
                  <a href={'https://sketchpacks.com/'} className={'c-button c-button--primary'}>
                    Download Sketchpacks
                  </a>
                </div>

                <div className={'o-grid__col u-1/2'}>
                  <img
                    src="/static/work/sketchpacks/icon@2x.png"
                    width="256"
                    className={'u-mb-large u-float-right'}
                  />
                </div>
              </header>
            </section>
          </div>

          <section className={'o-container u-pv-ultra u-mt-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline o-scored'}>The Challenge</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Sketch provides a powerful Javascript API, allowing the
                  creation of plugins that extend its native functionality. As
                  the Sketch plugin ecosystem started to scale, so did the
                  experience gaps in the management and distribution of plugins.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  My challenge was to provide Sketch Users a service to manage
                  and sync their plugins across machines and teams. This
                  service would be built on top of a system designed to help
                  Sketch Developers distribute their plugins at scale.
                </p>
              </div>
            </div>
          </section>

          <blockquote className={'o-container o-container--wide u-pv-large c-quote u-1/2 u-ph-large'}>
            <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
              &ldquo;I&apos;m super excited about @sketchpacks, that was a much needed tool!&rdquo;
            </p>
            <strong className={'u-uppercase o-type-small u-color-quote'}>
              @SketchTricks
            </strong>
          </blockquote>

          <section className={'o-container u-pt-mega u-pb-large u-angled--top'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline o-scored'}>The Approach</h2>
              </div>
              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Well&ndash;understood problems have well&ndash;designed solutions.
                  That&apos;s why understanding the problem and the people affected
                  play a huge role in my design process and strategy.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Identifying the root cause is key to solving problems well.
                  I approached the problem by analyzing the core elements, systems,
                  and their connections with one another. Understanding their
                  purpose provided the insights to begin designing an essential
                  service.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-large u-pb-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col col-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>The journey starts with the people</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  I had the pleasure of meeting many talented people from the
                  Sketch Design &amp; Development community.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Including sponsor users in the design &amp; development process
                  gave me the confidence to move forward with iterations.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Loose proto&ndash;personas were inspired by
                  the people I&apos;ve met and interviewed throughout the process.
                </p>
              </div>

              <div className={'o-grid__col col-1/1 u-1/3@sm'}>
                <PersonaCard
                  name={'Alice'}
                  archetype={'Sketch Developer'}
                  thumbnail_url={'https://randomuser.me/api/portraits/women/68.jpg'}
                />
              </div>

              <div className={'o-grid__col col-1/1 u-1/3@sm'}>
                <PersonaCard
                  name={'Bob'}
                  archetype={'Sketch User'}
                  thumbnail_url={'https://randomuser.me/api/portraits/men/41.jpg'}
                />
              </div>
            </div>
          </section>

          <div className={'u-bgcolor-gray-0'}>
            <section className={'o-container o-container--wide u-pt-mega u-pb-mega u-mv-large'}>
              <div className={'o-grid o-grid--wide o-grid--cards'}>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-mb-large u-text-center@sm o-page-content'}>
                  <h2 className={'o-type-title u-color-headline u-mb-small'}>Focus on user outcomes</h2>

                  <p className={'o-type-body-2 u-color-body-1 u-push-1/4@sm u-pull-1/4@sm'}>
                    Continuous delivery is the foundation to being able to iterate
                    and validate assumptions. I used Job Stories to help align
                    the solution with the problem over time with each release.
                  </p>
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <JobStoryCard
                    archetype={'User'}
                    actor={'When I want to automate reptitive tasks within Sketch'}
                    action={'I want to search for a qualified plugin'}
                    outcome={'So that I can be more efficient'}
                    />
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <JobStoryCard
                    archetype={'User'}
                    actor={'When I become aware of new versions of plugins'}
                    action={'I want to update them'}
                    outcome={'So that I can receive new features and bug fixes'}
                    />
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <JobStoryCard
                    archetype={'User'}
                    actor={'When I work across multiple machines regularly'}
                    action={'I want access to the same plugins'}
                    outcome={'So that I can preserve my design tool chain'}
                    />
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <JobStoryCard
                    archetype={'User'}
                    actor={'When I am need to share my set of plugins'}
                    action={'I want provide my list of plugins'}
                    outcome={'So that the recipient can install my set of plugins'}
                    />
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <JobStoryCard
                    archetype={'Developer'}
                    actor={'When I have committed my final changes'}
                    action={'I want to publish my work'}
                    outcome={'So that my users will receive my latest revisions'}
                    />
                </div>

                <div className={'o-grid__col o-grid--equal-height u-1/1 u-1/2@sm'}>
                  <JobStoryCard
                    archetype={'Developer'}
                    actor={'When my plugin has been published'}
                    action={'I want to view its analytics'}
                    outcome={'So that I can measure its performance'}
                    />
                </div>
              </div>
            </section>
          </div>

          <section className={'o-container o-container--wide u-pt-large'}>
            <div className={'o-grid o-grid--wide'}>

              <div className={'o-grid__col o-grid--equal-height u-1/1 u-mb-mega u-text-center@sm o-page-content'}>
                <h2 className={'o-type-display-1 u-color-headline u-mb-small'}>Analyze &amp; Synthesize</h2>
              </div>

              <div className={'o-grid__col u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Closing the (service) loop</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Most services are designed to support repeat usage. This experience
                  was no different for Developers and Users.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Withthis in mind, I set out to craft systems within the Sketchpacks ecosystem
                  that would support the various service loops Developers and Users would experience.
                </p>
              </div>

              <div className={'o-grid__col u-2/3@sm'}>
                <img src='/static/work/sketchpacks/service-loops.png' />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega u-pb-mega'}>
            <div className={'o-grid o-grid--rev o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Uncover insights and opportunities</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Service blueprints are a great method for documenting and analyzing
                  the user&apos;s As&ndash;Is situation within an ecosystem.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Once I analyzed the As&ndash;Is situation of the current services
                  available to developers and users, I then crafted a To&ndash;Be
                  service blueprint.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='/static/work/sketchpacks/service-blueprint.png' />
              </div>
            </div>
          </section>


          <div className={'u-bgcolor-gray-0'}>
            <blockquote className={'o-container u-pv-large c-quote u-1/2 u-ph-large'}>
              <p className={'o-type-big-quote u-weight-light o-type-italic u-color-quote u-mb-small'}>
                &ldquo;The beauty of a living thing is not the atoms that go into
                it, but the way those atoms are put together.&rdquo;
              </p>
              <strong className={'u-uppercase o-type-small u-color-quote'}>
                Carl Sagan
              </strong>
            </blockquote>
          </div>



          <section className={'o-container u-pt-mega u-pb-large u-angled--top'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline o-scored'}>The Strategy</h2>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm o-page-content'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  The product roadmap was iterative and motivated by the community.
                  Their vision consisted of four key experiences: discovery,
                  management, sharing, and syncing.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Feedback from the community helped evolve the solution to solve
                  their problems.
                </p>
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Discovery</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Searching for plugins relied on the browser&apos;s native Find,
                  proving only to be useful if you knew exactly what you were
                  looking for.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  The desktop and web clients leverage the API providing full&ndash;text
                  search, surfacing plugins indexed by name, description, and
                  the contents of their README.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img
                  src='/static/work/sketchpacks/app.png'
                />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide o-grid--rev'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Management</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Prior to Sketch 45, Users had to be proactive with keeping
                  their plugins up&ndash;to&ndash;date.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  The desktop client provides four different plugin update strategies
                  per plugin. Sketchpacks periodically checks for plugin updates
                  and applies them accordingly in the background while you work.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img
                  src='/static/work/sketchpacks/version-ranges-and-locks@2x.png'
                />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm o-page-content'}>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Sharing</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Sharing plugins is a natural behavior amongst the Sketch community.
                  I designed a JSON schema format that would allow Sketchpacks users
                  to share plugins easily.
                </p>

                <p className={'o-type-body-2 u-color-body-1'}>
                  The desktop client supports both importing and exporting
                  the user&apos;s plugin library.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <img src='/static/work/sketchpacks/json-schema@2x.png' />
              </div>
            </div>
          </section>

          <section className={'o-container o-container--wide u-pt-mega'}>
            <div className={'o-grid o-grid--rev'}>
              <div className={'o-grid__col u-1/1 u-1/2@sm o-page-content'}>
                <span className={'c-label u-bgcolor-tango o-type-small u-uppercase'}>Coming Soon</span>
                <h2 className={'o-type-title u-color-headline u-mb-small'}>Syncing</h2>

                <p className={'o-type-body-2 u-color-body-1'}>
                  Designers and teams will have the ability to sync plugins
                  across machines in near real&ndash;time.
                </p>
              </div>

              <div className={'o-grid__col u-1/1 u-1/2@sm'}>
                <img src='/static/work/sketchpacks/syncing@2x.png' width="500" />
              </div>
            </div>
          </section>

          <section className={'o-container u-pt-ultra u-pb-large u-angled--top'}>
            <div className={'o-grid o-grid--wide'}>
              <div className={'o-grid__col u-1/1 u-1/3@sm'}>
                <h2 className={'o-type-display-2 u-color-headline o-scored'}>The Impact</h2>
              </div>

              <div className={'o-grid__col u-1/1 u-2/3@sm'}>
                <p className={'o-type-body-2 u-color-body-1'}>
                  Since the <a href="https://medium.com/building-sketchpacks/introducing-sketchpacks-for-macos-8f4df3313b95">product launch</a> in March &apos;17, our team of two has
                  achieved a considerable amount of milestones yielding us some
                  impressive and humbling results.
                </p>
              </div>
            </div>
          </section>

          <div className={'u-bgcolor-gray-9'}>
            <section className={'o-container o-container--wide u-pv-large u-mt-large'}>
              <div className={'o-grid o-grid--wide'}>
                <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                  <span className={'u-weight-medium u-color-headline u-uppercase o-type-small u-color-gray-0 u-block'}>
                    App Downloads
                  </span>
                  <p className={'o-type-promo u-mt-small u-weight-thin u-color-gray-0'}>
                    22k
                  </p>
                </div>

                <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                  <span className={'u-weight-medium u-color-headline u-uppercase o-type-small u-color-gray-0'}>
                    Plugin Installs
                  </span>
                  <p className={'o-type-promo u-mt-small u-weight-thin u-color-gray-0'}>
                    37k
                  </p>
                </div>

                <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                  <span className={'u-weight-medium u-color-headline u-uppercase o-type-small u-color-gray-0'}>
                    Plugin Updates
                  </span>
                  <p className={'o-type-promo u-mt-small u-weight-thin u-color-gray-0'}>
                    87k
                  </p>
                </div>

                <div className={'o-grid__col u-1/1 u-1/4@sm'}>
                  <span className={'u-weight-medium u-color-headline u-uppercase o-type-small u-color-gray-0'}>
                    Monthly Active Users
                  </span>
                  <p className={'o-type-promo u-mt-small u-weight-thin u-color-gray-0'}>
                    4k
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div style={{ backgroundImage: "url('/static/work/sketchpacks/diamond_background.svg')", backgroundColor: "#512DA8" }}>
            <section className={'o-container u-pv-mega o-container--centered'}>
              <div className={'o-grid'}>
                <div className={'o-grid__col'}>
                  <img
                    src="/static/work/sketchpacks/app@2x.png"
                    width="720"
                    className={'u-mb-large'}
                  />

                  <h2 className={'o-type-display-1 u-color-gray-0 u-mb-large'}>
                    Download Sketchpacks for free
                  </h2>

                  <a href={'https://sketchpacks.com/'} className={'c-button c-button--primary'}>
                    Download Sketchpacks
                  </a>
                </div>
              </div>
            </section>
          </div>

        </article>

      </ProjectLayout>
    )
  }
}

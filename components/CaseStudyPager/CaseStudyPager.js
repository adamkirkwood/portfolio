import { Link } from '../../routes'
import caseStudies from '../../data/work.json'

const getCurrentIndex = slug => {
  return Object.keys(caseStudies).indexOf(slug)
}

const getPrevious = slug => {
  const prev = (getCurrentIndex(slug) % Object.keys(caseStudies).length) === 0
    ? Object.keys(caseStudies).slice(-1)
    : Object.keys(caseStudies)[getCurrentIndex(slug) - 1]
  return prev
}

const getNext = slug => {
  const next = (getCurrentIndex(slug) < (Object.keys(caseStudies).length-1))
    ? Object.keys(caseStudies)[getCurrentIndex(slug) + 1]
    : Object.keys(caseStudies)[0]
  return next
}

export default ({ current }) => (
  <section className={'c-cover'}>
    <div className={'o-grid'}>
      <div className={'o-grid__col u-1/1 u-1/2@sm u-pv-large u-bgcolor-gray-0'}>
        <div className={'u-mh-large u-mh-small@sm u-mh-large@md u-2/3@lg'}>
          <strong className={'u-inline-block u-mb-small u-uppercase o-type-small u-color-gray-6'}>
            Previously
          </strong>


          <h2 className={'o-text-title u-mb-small u-color-gray-9'}>
            { caseStudies[getPrevious(current)].title }
          </h2>

          <p className={'o-type-body-2 u-color-body-1 u-mb-medium'}>
            { caseStudies[getPrevious(current)].logline }
          </p>

          <Link route={`/work/${getPrevious(current)}`}>
            <a className={'c-button c-button--outline u-border-gray-7 u-color-gray-7 u-weight-medium'}>
              &larr; View case study
            </a>
          </Link>
        </div>
      </div>

      <div className={`o-grid__col u-1/1 u-1/2@sm u-pv-large u-bgcolor-${getNext(current)}`}>
        <div className={'u-mh-large u-mh-small@sm u-mh-large@md u-2/3@lg'}>
          <strong className={'u-inline-block u-mb-small u-uppercase o-type-small u-color-gray-2'}>
            Up Next
          </strong>

          <h2 className={'o-text-title u-color-gray-2 u-mb-small'}>
            { caseStudies[getNext(current)].title }
          </h2>

          <p className={'o-type-body-2 u-color-gray-2 u-mb-medium'}>
            { caseStudies[getNext(current)].logline }
          </p>

          <Link route={`/work/${getNext(current)}`}>
          <a className={'c-button c-button--outline u-border-gray-0 u-weight-medium'}>
            View case study &rarr;
          </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

import { Link } from '../../routes'

export default ({ inverse }) => {
  const cssClassNames = inverse
    ? 'o-main-navigation o-main-navigation--inverse u-ph-medium u-pv-medium'
    : 'o-main-navigation u-ph-large u-pv-medium'

  return (
    <div className={cssClassNames}>

        <div className={'o-type-headline'}>
          <Link route={'frontpage'}>
            <a>
              <strong>Adam Kirkwood</strong>
            </a>
          </Link>
        </div>

        <nav>
          <ul className={'o-list o-list--inline o-list--wide'}>
            <li className={'o-list__item o-type-headline'}>
              <Link route={'work'}>
                <a>Portfolio</a>
              </Link>
            </li>

            <li className={'o-list__item o-type-headline'}>
              <a href="https://medium.com/@adamkirkwood" target="_blank">
                Writing
              </a>
            </li>

            <li className={'o-list__item o-type-headline'}>
              <a href="mailto:hello@adamkirkwood.com">
                Contact
              </a>
            </li>
          </ul>
        </nav>

    </div>
  )

}

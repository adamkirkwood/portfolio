export default ({ inverse }) => {
  const cssClassNames = inverse
    ? 'o-main-navigation o-main-navigation--inverse u-ph-medium u-pv-medium'
    : 'o-main-navigation u-ph-medium u-pv-medium'

  return (
    <div className={cssClassNames}>

        <div className={''}>
          <strong>Adam Kirkwood</strong>
        </div>

        <nav className={''}>
          <ul className={'o-list o-list--inline o-list--wide'}>
            <li className={'o-list__item'}>
              <a href="/process">Process</a>
            </li>

            <li className={'o-list__item'}>
              <a href="/about">About</a>
            </li>

            <li className={'o-list__item'}>
              <a href="https://medium.com/@adamkirkwood">Writing</a>
            </li>

            <li className={'o-list__item'}>
              <a href="mailto:hello@adamkirkwood.com">Contact</a>
            </li>
          </ul>
        </nav>

    </div>
  )

}

import { Link } from '../../routes'

export default ({ title, logline, path, slug }) => (
  <Link route={path}>
    <a>
      <div className={'o-overlay'}>
        <div className={'o-project-preview__info'}>
          <h3 className={'u-color-gray-0 o-type-display-1 u-mb-xsmall'}>{ title }</h3>
          <p>{ logline }</p>
        </div>
      </div>
      <img
        src={`/static/work/${slug}/thumbnail.png`}
        srcset={`/static/work/${slug}/thumbnail.png 1x, /static/work/${slug}/thumbnail@2x.png 2x`}
      />
    </a>
  </Link>
)

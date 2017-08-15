export default ({ actor, action, outcome, archetype }) => (
  <div className={'c-card u-pv-medium u-ph-medium u-bgcolor-white'}>
    <div className={'u-mb-small u-uppercase u-weight-medium'}>{archetype}</div>

    <p className={'o-type-body-2 u-color-body-1'}>
      {actor},<br />
      {action},<br />
      {outcome}.
    </p>
  </div>
)

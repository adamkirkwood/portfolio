import stylesheet from 'styles/main.scss'

export default ({ title = 'This is the default title' }) => (
  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
)

import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Takagi Blog</h1>
        <h2>Welcome to blog.iamtakagi.net</h2>
      </div>
    </>
  )
}

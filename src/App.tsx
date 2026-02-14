import ProfileHeader from './components/ProfileHeader'
import ButtonLink from './components/ButtonLink'
import Footer from './components/Footer'
import { links } from './data/links'

export default function App(){
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-6 py-0 flex flex-col items-center gap-8">
        <ProfileHeader />
        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (<ButtonLink key={link.url} link={link} />))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
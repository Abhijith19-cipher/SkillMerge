import { useNavigate, useLocation } from 'react-router-dom'
import StaggeredMenu from './StaggeredMenu'
import logoSrc from '../assets/skillmerge-logo.png'

const NAV_ITEMS_HOME = [
  { label: 'Home',      ariaLabel: 'Go to home',              link: '/'          },
  { label: 'About',     ariaLabel: 'Learn about SkillMerge',  link: '/about'     },
  { label: 'Courses',   ariaLabel: 'Browse our courses',      link: '/courses'   },
  { label: 'Placement', ariaLabel: 'Placement info',          link: '/placement' },
  { label: 'Contact',   ariaLabel: 'Get in touch',            link: '/contact'   },
]


const SOCIAL_ITEMS = [
  { label: 'Instagram', link: 'https://www.instagram.com/skillmergeindia/' },
  { label: 'Facebook',  link: 'https://www.facebook.com/profile.php?id=61563365234885' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  // Build items that use react-router for SPA navigation
  const items = NAV_ITEMS_HOME.map(item => ({
    ...item,
    // href will be handled by our click override below
  }))

  const handleItemClick = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank')
      return
    }
    // Hash on same page
    if (link.startsWith('/#') && location.pathname === '/') {
      const id = link.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else if (link.startsWith('/#')) {
      // Navigate to home then scroll
      navigate('/')
      setTimeout(() => {
        const id = link.slice(2)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    } else {
      navigate(link)
    }
  }

  // Override item links to use navigate
  const navItems = NAV_ITEMS_HOME.map(item => ({
    ...item,
    link: item.link, // keep for aria but we override click
    onClick: () => handleItemClick(item.link)
  }))

  return (
    <StaggeredMenu
      position="right"
      items={navItems}
      socialItems={SOCIAL_ITEMS}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen={true}
      colors={['#B497CF', '#5227FF']}
      logoUrl={logoSrc}
      accentColor="#5227FF"
      isFixed={true}
      closeOnClickAway={true}
      onMenuOpen={() => { document.body.classList.add('menu-open') }}
      onMenuClose={() => { document.body.classList.remove('menu-open') }}
    />
  )
}

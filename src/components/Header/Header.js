import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title && (
       <img height="50px" alt="Avatar placeholder" src={title} />
      )}
          </a>
        ) : (
          <img height="50px" alt="Avatar placeholder" src={title} />
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header

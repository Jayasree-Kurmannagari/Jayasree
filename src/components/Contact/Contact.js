import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <ul className='contact__list'>
        <li className='contact__item'>
          <a href={`mailto:${contact.email}`}>
            <i className= "fa fa-envelope icon contact__icon"/>
          </a>
        </li>
        <li className='contact__item'>
          <a href = {contact.social.github}>
          <i className= "fab fa-github icon contact__icon"/>
          </a>
        </li>
        <li className='contact__item'>
          <a href = {contact.social.linkedIn}>
            <i className='fab fa-linkedin icon contact__icon'/>
          </a>
        </li>
        <li className='contact__item'>
          <a href = {contact.social.blog}>
          <i className='fa fa-highlighter icon contact__icon' />
          </a>
        </li>
        <li className='contact__item'>
          <a href = {contact.social.codepen}>
            <i className= 'fab fa-codepen icon contact__icon'/>
          </a>
        </li>
      </ul>
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      {contact.social && (
          <>
            {contact.social.github && (
              <a
                href={contact.social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {contact.social.linkedin && (
              <a
                href={contact.social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )} */}
    </section>
  )
}

export default Contact

import { useRef } from 'react'

export default function MenuToggle({ toggle }) {
  let menuButton = useRef(null)

  const openMenu = () => {
    menuButton.current.classList.toggle('change')
    toggle()
  }

  return (
    <>
      <button className='hamburger' ref={menuButton} onClick={openMenu}>
        <div className='hamburger__bar'></div>
        <div className='hamburger__bar'></div>
        <div className='hamburger__bar'></div>
      </button>
    </>
  )
}

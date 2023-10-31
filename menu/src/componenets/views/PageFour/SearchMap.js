import React from 'react'

function SearchMap() {
    const mapStyle = {
        width: '100%',
        height: '400px',
        style: 'border',
        marginTop: '10px',
        border: 'none',

    }
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4471.713125455028!2d126.97232276478306!3d37.579119851534415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c74aeddea1%3A0x8b3046532cc715f6!2z6rK967O16raB!5e0!3m2!1sko!2skr!4v1693552615872!5m2!1sko!2skr"
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    style={mapStyle}></iframe>
  )
}

export default SearchMap
import React from 'react'

interface Props {
 
  allowFullScreen?: 

}


const MapSection: React.FC<Props> = () => {
  return (

    
    <iframe 
        className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14814.529229745942!2d17.992913042240676!3d59.348754124068535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d86c5590a35%3A0xac5dd727a529fe56!2sEC%20Utbildning!5e0!3m2!1ssv!2sse!4v1665931442800!5m2!1ssv!2sse"
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    

  )
}

export default MapSection
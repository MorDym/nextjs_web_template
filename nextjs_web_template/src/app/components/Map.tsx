import React from 'react'

function Map() {

    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83394.64096593138!2d15.799743798999213!3d49.21796190262356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d423a08e99433%3A0x400af0f661600c0!2zVMWZZWLDrcSNLCA2NzQgMDEgVMWZZWLDrcSNIDE!5e0!3m2!1scs!2scz!4v1755522130861!5m2!1scs!2scz";
  return (
    <div>
       <iframe src={mapSrc} width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
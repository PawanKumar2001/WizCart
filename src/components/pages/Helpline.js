import React from 'react'

export default function Helpline(props) {
  return (
    <div className={`container w-100 pt-5 mt-5 mb-5 text-${props.mode === "light" ? "dark" : "light"}`}>
            <strong className='display-5'>🙋‍♀️ Having Trouble?</strong>
            <p className='mt-3'>Reach us and we`ll be glad to help you.</p>
            <p className='lead mt-5'>Reach us via mail</p>
            <p>websitecare@gmail.com</p>
            <p>websitesupport@gmail.com</p>
            <p className='lead mt-5'>Call us anytime!</p>
            <p>1110 1000 0101</p>
            <p>5010 3012 3012</p>
            <p className='lead mt-5'>Reach us via WhatsApp</p>
            <p className='pb-5 mb-5'>+918934016698</p>
        </div>
  )
}

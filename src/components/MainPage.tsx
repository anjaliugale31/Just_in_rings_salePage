import React from 'react'
import { IMG1, IMG2, IMG3, IMG4, IMG5, 
    IMG6, IMG7, IMG8, IMG10, IMG11,
    IMG13, IMG14, IMG15, IMG16, IMG17,
    IMG19, IMG20, IMG22, IMG23, IMG24,
    IMG25, IMG26, IMG27, IMG28, IMG29,
    IMG30, IMG31, IMG32, IMG33, IMG34,
    IMG35, IMG36, IMG37, IMG38, MP4Animations } from '../images'
import Lottie from 'lottie-react'

const MainPage = () => {
    const images = [IMG26, IMG25, IMG27,
                    IMG22, IMG17, IMG16,
                    IMG29, IMG1, IMG30,
                    IMG14, IMG19,IMG15,
                    IMG31, IMG3, IMG32,
                    IMG11, IMG8, IMG13,
                    IMG33, IMG4, IMG34,
                    IMG2, IMG7, IMG10,
                    IMG35, IMG5,IMG36,
                    IMG23, IMG20, IMG24,
                    IMG37, IMG6,IMG38,
                    IMG28]

    const renderImage = () =>{
        return images.map((imageFile, index)=>(
            <div key={index} className="col-md-6 col-sm-6 col-lg-4 mb-2">
                <div className="card animate__animated animate__backInLeft animate__slideInUp" style={{ 
                    width: '100%',
                    height:'100%',
                    boxShadow:'0px 29px 52px 0px rgba(0,0,0,0.4)',
                    borderRadius:'35px',
                    }}>
                    <img src={imageFile} className="card-img-top animate__animated animate__zoomIn" alt={`Image_${index}`}
                    style={{borderRadius:'35px', height:'100%'}} />
                    </div>
                </div>
        ))
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-lg-4 col-sm-4 col-md-4">
                <Lottie
                animationData={MP4Animations}
                className='animate__animated animate__bounce'
                style={{
                width: "200px",
                margin: "0 auto",
                }}
                />
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
                <div className="icon-container">
                    <section
                        className='animate__animated animate__backInRight'
                        style=
                        {{textAlign:'center',
                        marginTop:'30px',
                        fontSize:'24px',
                        marginBottom:'40px'
                        }}
                        >
                        💣 ᴅɪᴡᴀʟɪ ᴅʜᴀᴍᴀᴋᴀ: ɢᴇᴛ ᴍᴏʀᴇ, ꜱᴘᴇɴᴅ ʟᴇꜱꜱ – ᴀʟʟ ɪᴛᴇᴍꜱ Upto <b>₹199</b>💣
                    </section>
                </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
            <Lottie
                animationData={MP4Animations}
                className='animate__animated animate__bounce'
                style={{
                width: "200px",
                margin: "0 auto",
                }}
                />
            </div>
        </div>
        <div className="row justify-content-center mb-2">
                {renderImage()}
                </div>
    </div>
  )
}

export default MainPage
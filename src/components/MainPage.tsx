import React, { useEffect } from 'react'
import {  MP4Animations } from '../images'
import Lottie from 'lottie-react'
import styled from 'styled-components';
import images from '../elements/images';
const MainPage = () => {
    const renderImage = () =>{
        return images.map((imageFile, index)=>(
            <div key={index} className="col-md-4 col-sm-4 col-lg-4 col-xs-6 mb-2">
                <div className="card animate__animated animate__backInLeft animate__slideInUp" style={{ 
                    width: '100%',
                    height:'100%',
                    boxShadow:'0px 29px 52px 0px rgba(0,0,0,0.4)',
                    backgroundColor:'white'
                    }}>
                    <img src={imageFile.image} className="card-img-top animate__animated animate__zoomIn" alt={`Image_${index}`}
                    style={{ height:'100%'}} />
                    <div className='card-title text-center mt-2'>
                        Type:&nbsp;<strong>{imageFile.title}</strong>
                    </div>
                </div>
            </div>

        ))
    }
  return (
    <MainComponet>
        <div className='container'>
            <div className='row '>
                <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4 ">
                    <Lottie
                    animationData={MP4Animations}
                    className='animate__animated animate__bounce'
                    style={{
                    width: "200px",
                    margin: "0 auto",
                    marginBottom:'-45px'
                    }}
                    />
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4 ">
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
                <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4 ">
                <Lottie
                    animationData={MP4Animations}
                    className='animate__animated animate__bounce bulb'
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
    </MainComponet>
  )
}
const MainComponet = styled.div`
@media screen and (max-width: 575px) {
    .col-xs-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
    @media screen and (max-width: 576px) {
        .bulb{
            display: none;
        }
    }
`

export default MainPage
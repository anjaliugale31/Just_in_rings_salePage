import React from 'react'
import { IMG1, IMG2, IMG3, IMG4, IMG5, 
    IMG6, IMG7, IMG8, IMG10, IMG11,
    IMG13, IMG14, IMG15, IMG16, IMG17,
    IMG19, IMG20, IMG22, IMG23, IMG24, IMG25, IMG26, IMG27} from '../images'

const MainPage = () => {
    const images = [IMG26, IMG25, IMG27,IMG1, IMG3, IMG4, IMG5, IMG6, IMG2, IMG7, IMG10, IMG11, 
                    IMG8, IMG13, IMG14, IMG15, IMG16, IMG17, IMG19, 
                    IMG22, IMG23, IMG25, IMG20, IMG24]

    const renderImage = () =>{
        return images.map((imageFile, index)=>(
            <div key={index} className="col-md-6 col-sm-6 col-lg-4 mb-2">
                <div className="card animate__animated animate__backInLeft" style={{ 
                    width: '100%',
                    height:'100%',
                    boxShadow:'0px 29px 52px 0px rgba(0,0,0,0.4)',
                    borderRadius:'35px',
                    }}>
                    <img src={imageFile} className="card-img-top" alt={`Image_${index}`}
                    style={{borderRadius:'35px', height:'100%'}} />
          
          </div>
          
            </div>
            
        ))
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-lg-12">
                <section 
                className='animate__animated animate__backInRight'
                    style=
                    {{textAlign:'center',
                    marginTop:'30px',
                    fontSize:'30px',
                    marginBottom:'40px'
                    }}>
                       💣 ᴅɪᴡᴀʟɪ ᴅʜᴀᴍᴀᴋᴀ: ɢᴇᴛ ᴍᴏʀᴇ, ꜱᴘᴇɴᴅ ʟᴇꜱꜱ – ᴀʟʟ ɪᴛᴇᴍꜱ ᴜɴᴅᴇʀ <b>₹199</b>💣
                    </section>
                    <div className="icon-container">
           
                </div>
                </div>
        </div>
        <div className="row justify-content-center mb-2">
                {renderImage()}
                </div>
    </div>
  )
}

export default MainPage
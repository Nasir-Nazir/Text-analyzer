import React ,{useState} from 'react'

export default function About(props) {
 
  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white'
  }
  return (
    <div className='container my-4' >
    <h2 className='my-3' style={{color:props.mode==='dark'?'purple':'black'}}>About Us!</h2>
      <div className="accordion my-3" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong >Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" >
            It is away to analyze your text quickly and effeciently, which contain word count or character count etc
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle}>
          It is a free character counter tool which give u Word & Character counter Statistics for a given text.It reports the number of words or counter.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
             <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            It works in any web browser such as Google , firefox , Internet Explorer , Safari and Opera
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

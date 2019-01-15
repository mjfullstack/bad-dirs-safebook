// Child of Cardlist.js
import React from 'react'; // Required for JSX i.e. <div> below is

// Function Way, NOT extend component way
// const Card = (props) => {
  // const { id, name, username, email } = props;
const Card = ({ id, name, username, email }) => {  
  return ( // return ONE component i.e. div
    <div className='tc bg-green dit br3 pa2 ma2 grow bw2 shadow-5 fl w-20 card'> 
       <img src={`https://robohash.org/${id}?size=150x150`} alt='RoboFoto'/>
       <div className="card-body">
          {/* <h5 className="card-title">{name}</h5> */}
          {/* <p>Username: {username}</p> Lorem ipsum*/}
          {/* <p>Username:</p> */}
          {/* <p>{username}</p> */}
          {/* <p className="tl">e-mail: {email}</p> */}
       </div>
    </div>
  )
}

export default Card;
import React from 'react'

const Names = ({names, handleDeleteBtn, handleContinueBtn, style}) => {
  let btn;
  console.log(style)


  const nameList = names.map(name => {
    if (names) {
      return (
        <div className="name" key={name.id}>
          <p>{name.id } : {name.name}</p>
          <button onClick={() => {handleDeleteBtn(name.id)}}>Click here to delete name</button>
        </div>
        
      )

    } else {
      return null;
      
    }
  })

  

  if (names.length > 0) {
    // console.log(names)
    btn = <button onClick={handleContinueBtn}>Click here if you want to continue</button>
  } else {
    return null;
  }

  return(
    <div className="namesList flex-child" style={{display: style.display}}> 
      <h2>Id : name</h2>

      {nameList}

      {btn}
    </div>
  )
}


// class Names extends React.Component {
    
//     render() {
//       const nameList = this.props.map(name => {
//         if (this.props) {
//           return (
//             <div className="name">
//               <p>{name.id } : {name.name}</p>
//             </div>
//           )
//         } else {
//           return null
//         }
//       })

//       return (
//         <div className="names">
//           <h1> Names: </h1>
//           {nameList}
//         </div>
//       )
//     }
// }

export default Names;
import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        if(word==='danger'){
            word='error';
        }
        let a=word.toLowerCase();
        return a.charAt(0).toUpperCase()+a.slice(1);
    }
  return (
    <div style={{height:"50px"}}>
   {/* {props.alert && 
   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
    
    } */}
   {props.alert && (
  <div className={`flex items-center bg-${props.alert.type === 'success' ? 'green' : 'red'}-500 text-white text-sm font-bold px-3 py-2 shadow-md rounded-md opacity-80`} role="alert">
    {props.alert.type === 'success' ? (
      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
      </svg>
    ) : (
      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12.46 12l1.07-1.06L11 10.88 9.47 12 8.4 10.94 11 8.33 13.6 10.93zM10 18c-5.52 0-10-4.48-10-10S4.48 2 10 2 20 6.48 20 12s-4.48 10-10 10zm0-18C5.58 0 1 4.58 1 10s4.58 10 10 10 10-4.58 10-10-4.58-10-10-10z" />
      </svg>
    )}
    <p>{props.alert.msg}</p>
  </div>
)}


    </div>
  
  )
}

export default Alert

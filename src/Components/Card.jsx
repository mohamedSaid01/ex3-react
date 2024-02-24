import './Card.css'

function Card(props){
    return(
        <div className='card' style={{backgroundColor: `rgb(${props.bgColor})`}}>
            <div className='title' style={{color: `rgb(${props.textColor})`}}>
                 <img src={props.image} alt="logo"/>
                <p>{props.nom}</p>
            </div>
                <p>{props.number}<span>/100</span></p> 
        </div>
    )
}

export default Card
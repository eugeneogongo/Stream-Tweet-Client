import  React from 'react'
import io from  'socket.io-client'
import styles from 'bootstrap/dist/css/bootstrap.min.css'
import  css from './ListCss.css'
import  "animate.css"

const Tweet=(data)=>{
    const cardstyle={
        width:"400px",
        margin:"10px"
    }

    let t = JSON.parse(JSON.stringify(data["data"]))
return(
    <div className={"card mb-3 fadeInDown"} style={cardstyle}>
        <div className="row no-gutters">
            <div className="col-md-2 centerimage">
                <img src={t.avatar} alt="..."/>
            </div>
            <div className={"col-md-10"}>
        <div className={"card-body"}>
            <p className={"card-text"}>{t.name}</p>
            <p className={"card-text"}>{t.text}</p>
        </div>
            </div>
        </div>
    </div>
)}

class ListTweet extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        let items =  this.props.tweets.map(tweet=>{
                    return <Tweet data={tweet}/>});
        return(
            <div className={"rows"}>
                <div className={"card-columns"}>
                {items}
            </div>
            </div>
        )
    }

}
export default ListTweet;
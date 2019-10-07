import  React from 'react'
import styles from 'bootstrap/dist/css/bootstrap.min.css'
import "./NoTweet.css"
class NoTweet extends React.Component{
    render() {
    return(
        <div className={'alert alert-primary card-body size'}>
            <p className={"card-title"}>No Tweets</p>
        </div>
    )
    }
}
export default NoTweet
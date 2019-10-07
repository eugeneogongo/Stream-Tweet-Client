import React from 'react';
import axios from 'axios';
import styles from 'bootstrap/dist/css/bootstrap.min.css'

const formstyle={
    position:"fixed"
}
class TrackForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            trackword:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handletrackword = this.handletrackword.bind(this);
    }
    handleSubmit(event){
        window.localStorage.setItem("word",this.state.trackword);
        event.preventDefault();
       this.doPost();
    }
    doPost(){
        axios.post("/track",{
            word:this.state.trackword
        }).catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount() {
        this.setState({trackword:window.localStorage.getItem("word")})
        if(this.state.word !==""){
            this.doPost()
        }
    }

    componentWillUnmount() {
        window.localStorage.setItem("word",this.state.trackword);
    }
    handletrackword(event){
        this.setState({trackword:event.target.value})
    }
    render(){
        return (

            <div className={"card"}>
                <form onSubmit={this.handleSubmit} className={"card-body"}>
                    <div className={styles.formGroup}>
                        <label>Display Tweet Containing</label>
                        <input type={"text"} name={"word"} required={"true"} onChange={this.handletrackword} className={"form-control"}/>
                    </div>
                    <div className={styles.formGroup}>
                        <input type={"submit"} className={"btn btn-dark mt-3"}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default  TrackForm;
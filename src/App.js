import React from 'react';
import './App.css';
import TrackForm from "./TrackTweet/TrackForm";
import ListTweet from "./ListTweet/ListTweet";
import  'bootstrap/dist/css/bootstrap.min.css'
import io from "socket.io-client";
import NoTweet from "./NoTweets/NoTweet";

let list = [];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        }
    }

    componentDidMount() {
        document.title="Twitter Api"
        this.setSocket();
    }

    setSocket() {
        const _this = this;
        let socket = io.connect('https://mystreamserver.herokuapp.com:3001/');

        socket.on("tweet", function (tweet) {
            list.push(tweet)
            list.reverse();
            _this.setState({tweets: list})
        });
        socket.on("reset", function (msg) {
            list = [];
            _this.setState({tweets: list})

        })
    }

    render() {
        if (list.length > 0) {
            return (
                <div className={"container mt-5"}>
                    <div className={"row"}>
                        <div className={"split left"}>
                            <TrackForm/>
                        </div>
                        <div className={"split right"}>
                            <ListTweet tweets={this.state.tweets}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"container mt-5"}>
                    <div className={"row"}>
                        <div className={"split left"}>
                            <TrackForm/>
                        </div>
                        <div className={"split right center"}>
                           <NoTweet/>
                        </div>
                    </div>
                </div>
            )
        }
    }


}

export default App;

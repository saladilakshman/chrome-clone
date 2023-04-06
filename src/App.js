import React, { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";
import TimeAgo from 'timeago-react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from 'react-reveal/Zoom';
import axios from "axios";
import {
  FaHome,
  FaEllipsisV,
  FaSearch,
  FaShare,
  FaMicrophone
} from "react-icons/fa";
import { GoGear } from "react-icons/go";
//import axios from "axios";
import Images from "./Images";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [load, setLoad] = useState(true);
  const [close, setClose] = useState(false);
  const [news, setNews] = useState([]);
  const[result,setResult]=useState('');
  useEffect(() => {
    axios.get('https://gnews.io/api/v4/top-headlines?country=ind&lang=en&token=4a90d41250afd1a3634aedf39dc2b621')
    .then(response=>{
    setNews(response.data.articles);
    setLoad(false);
  })
  .catch(err=>console.log(err))
  navigator.permissions.query({name:'microphone'})
  .then(mode=>{
    if(mode.status==="granted"){
voiceFunctioning();
    }
    else{
      window.alert('OPs your microphone has been disabled')
    }
  })
  .catch(err=>err.name)
  },[news,result])
 
  const voiceFunctioning = () => {
    if (!close) {
      setClose((prevState) => !prevState);
      startRecogs();
    } else {
      console.log("failed to launch voice recognition");
    }
  };
  const startRecogs = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.continuous = false;
    recog.interimresults = false;
    recog.onstart = () => {
      console.log("listening...");
    };
    
    recog.onresult = (event) => {
      const result = event.results[0][0].transcript.split(".");
 setResult(result[0]);
      window.location.href = `https://www.${result}.com`;
    };
    recog.onend=()=>{
      setClose(prevState=>!prevState)
    }
    recog.start();
  };
  return (
    <div className="phone">
      <div className="navbar pt-3">
        <FaHome id="home" />
        <div className="d-flex justify-content-end align-items-start gap-3">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.4nLv6Ov0sJ4KR8Du-iBtCQHaHY?pid=ImgDet&rs=1"
            alt=""
            id="img"
            loading="lazy"
          />
          <FaEllipsisV className="dots" />
        </div>
      </div>
      <img
        className="w-50 h-auto "
        id="logo"
        src="https://www.localplaces.de/wp-content/uploads/2017/09/google-tools-1.png"
        alt=""
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position:'relative'
        }}
      >
        <FaSearch
          style={{
          left:'4.5rem',
          position:'absolute',
          }}
          id="search"
          onClick={() =>
            (window.location.href = `https://www.${searchValue}.com`)
          }
        />
        <input
          type="search"
          style={{
            width: "16rem",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
            background: "white",
            borderRadius: "0.8rem",
            border: "none",
            paddingLeft: "2.5rem",
            paddingRight: "2rem"
          }}
          value={searchValue}
          placeholder="search here"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <FaMicrophone
          style={{
          position:'absolute',
          right:'4.4rem',
            zIndex: 1
          }}
          id="micro"
          onClick={voiceFunctioning}
        />
      </div>
{close &&<div className=" card w-75 ms-5 pb-3"id="card">
<div className="d-flex justify-content-center align-items-center">
<img  className="w-50"src="https://tekiota.com/wp-content/uploads/2015/10/Google-Microphone-for-Speech-Recognition1.png"alt=""loading="lazy"/>
</div>
<p className="text-center">Listening...</p>
</div>}
      <section className="mt-3">
        <div className="images">
          {Array.from(Images, (image) => {
            return <img src={image} alt="chromium" className="w-50" id="im" />;
          })}
        </div>
      </section>
      <div className="d-flex mt-3 p-2">
        <p className="me-auto text-secondary">Discover</p>
        <GoGear className="ms-auto m-1" />
      </div>
      {load ? (
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',
        marginBlockStart:'5rem'}}>
          <div className="spinner-border text-primary fw-light"></div>
        </div>
      ) : (
        news.map((items) => {
          const { id, image, publishedAt, source, url, title } = items;
          const myDate = moment(publishedAt).startOf("day").fromNow();
          const newDate = myDate.slice(0, 4);
          const name = source.name;
          return (
            <div className="d-flex justify-content-center align-items-center">
              <Zoom>
              <div key={id} className="mx-auto p-2">
                <div onClick={() => (window.location.href = url)}>
                  <img src={image} alt="" className="w-100" id="news-images" />
                  <p className="text">{title}</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex gap-2" id="left-flex">
                    <p style={{ color: "black" }}>{name}</p>
                    <TimeAgo
  datetime={publishedAt}
  />
                  </div>
                  <div className=" d-flex ms-auto gap-2">
                    <FaShare
                      onClick={() => {
                        navigator.share({ url: url });
                      }}
                    />
                    <FaEllipsisV />
                  </div>
                </div>
                <hr />
              </div>
              </Zoom>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;

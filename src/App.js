import React,{useState,useEffect} from "react";
import moment from "moment";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHome,FaEllipsisV,FaSearch,FaShare,FaMicrophone} from "react-icons/fa";
import {GoGear} from "react-icons/go";
function App() {
  const[searchValue,setSearchValue]=useState('');
  const[close,setClose]=useState();
  const[news,setNews]=useState([]);
  const getNewsData=async()=>{
const response=await fetch(' https://gnews.io/api/v4/top-headlines?country=ind&lang=en&token=4a90d41250afd1a3634aedf39dc2b621');
const data= await response.json();
setNews(data.articles);
//console.log(data);
//console.table(data.articles);

  }
  useEffect(()=>{getNewsData();},[]);
  const voiceFunctioning=()=>{
    if(!close){
      setClose(preState=>!preState);
     startRecogs();
    }
    else{
      console.log('failed to launch voice recognition')
    }
  }
  const startRecogs=()=>{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.continuous=false;
    recog.interimresults=false;
    recog.onstart=()=>{
      console.log("listening...");
    }
    recog.onresult=(event)=>{
      const result=event.results[0][0].transcript;
      console.log(result);
      window.location.href=`https://www.${result}.com`;
    }
    recog.start();
  }
  return (
    <div className="phone">
   <div className="navbar pt-3">
    <FaHome id="home"/>
    <div className='d-flex justify-content-end align-items-start gap-3'>
   <img src="https://tse2.mm.bing.net/th/id/OIP.4nLv6Ov0sJ4KR8Du-iBtCQHaHY?pid=ImgDet&rs=1"alt=""id="img"/>
  <FaEllipsisV className="dots"/>
   </div>
   </div>
   <img className="w-50 h-auto "id="logo"src="https://www.localplaces.de/wp-content/uploads/2017/09/google-tools-1.png"alt=""/>
   
        <div className="input-group d-flex justify-content-center align-items-center mx-auto"id="field">
          <span className="input-group-text">
            <FaSearch
              className=""
              id="search"
              onClick={() =>
                (window.location.href = `https://www.${searchValue}.com`)
              }
            />
          </span>
          <input
            type="text"
            value={searchValue}
            placeholder="search here"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className="input-group-text"onClick={voiceFunctioning}><FaMicrophone/></span>
        </div>
     { close &&<div className=" card w-75 ms-5 pb-3"id="card">
        <div className="d-flex justify-content-center align-items-center">
        <img  className="w-50"src="https://tekiota.com/wp-content/uploads/2015/10/Google-Microphone-for-Speech-Recognition1.png"alt=""/>
      </div>
      <p className="text-center">Listening...</p>
      </div>}
    <section className="mt-3">
<div className="images">
<img src="https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fwww.thewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=KAqZpO4yRo6V5YA75CVrNPO1UNoFiHpznXqWnLl2ex4%3d&risl=&pid=ImgRaw&r=0"alt=""className="w-50"id="im"/> 
<img src="https://tse1.mm.bing.net/th/id/OIP.ObewiEp45AN1qjiPtLeJfAAAAA?pid=ImgDet&w=304&h=171&rs=1"alt=""className="w-50"id="im"/>
<img src="https://th.bing.com/th/id/OIP.y9D-m_c0_2eyOhxPwrMA7gHaEK?pid=ImgDet&rs=1"alt=""className="w-50"id="im"/>
<img src="https://th.bing.com/th/id/OIP.A-shBvKttAe5_OCx7x7UmwHaE8?pid=ImgDet&rs=1"alt=""className="w-50"id="im"/>
<img src="https://th.bing.com/th/id/OIP.0qWBNGA2nQ73wIizJbIB_QHaE8?pid=ImgDet&rs=1"alt=""className="w-50"id="im"/>
</div>
</section>
    <div className="d-flex mt-3 p-2">
    <p className="me-auto text-secondary">Discover</p>
    <GoGear className="ms-auto m-1"/>
    </div>
    {news.map((items)=>{
      const{id,image,publishedAt,source,url,title}=items;
      const myDate=moment(publishedAt).startOf('day').fromNow();
      const newDate=myDate.slice(0,4);
      const name=source.name;
      return(
        <div className="d-flex justify-content-center align-items-center">
        <div key={id} className="mx-auto p-2">
          <div onClick={()=>window.location.href=url}>
          <img src={image}alt=""className="w-100"id="news-images"/>
          <p className="text">{title}</p>
          </div>
          <div className="d-flex">
          <div className="d-flex gap-2"id="left-flex">
          <p className="text-grey">{name}</p>
          <p>{newDate}</p>
          </div>
          <div className=" d-flex ms-auto gap-2">
            <FaShare onClick={()=>{
            navigator.share({url:url})
            }}/>
            <FaEllipsisV/>
          </div>
          </div>
          <hr/>
        </div>
        </div>
         
      )
    })}
    </div>
  );
  }

export default App;

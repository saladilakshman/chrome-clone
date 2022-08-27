import React,{useState,useEffect} from "react";
import moment from "moment";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHome,FaEllipsisV,FaSearch,FaShare} from "react-icons/fa";
import {GoGear} from "react-icons/go";
function App() {
  const[searchValue,setSearchValue]=useState('');
  const[news,setNews]=useState([]);
  const getNewsData=async()=>{
const response=await fetch("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=e198b3e419e240998052a81ef45c64fa");
const data= await response.json();
setNews(data.articles);
//console.table(data.articles);

  }
  useEffect(()=>{getNewsData();},[]);
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
    <div>
      <div className="input-group d-flex justify-content-center align-items-center mx-auto">
        <span  className="input-group-text"><FaSearch className=""id="search"onClick={()=>window.location.href=`https://www.${searchValue}.com`}/></span>
      <input type="text"value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      </div>
    </div>
   
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
      const{id,urlToImage,publishedAt,source,url,title}=items;
      const myDate=moment(publishedAt).fromNow();
      const newDate=myDate.slice(0,3);
      const name=source.name;
      return(
        <div className="d-flex justify-content-center align-items-center">
        <div key={id} className="mx-auto p-2">
          <div onClick={()=>window.location.href=url}>
          <img src={urlToImage}alt=""className="w-100"id="news-images"/>
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

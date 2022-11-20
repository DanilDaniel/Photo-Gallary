import React, {useEffect, useState} from 'react';
import { Suspense } from "react";

function App() {

  const [gallery, setGallery] = useState([]);
  const [request, setRequest] = useState('');
  const Access_Key = '0YvY4OaFgFaRG3SOYy6Z7DoBV3a57eFhausQZPHYlTg';



      const fetchData = async () => {
            const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${request}&client_id=${Access_Key}`);
            const dataJ = await data.json();
            const result = dataJ.results;
            setGallery(result);


      }


  useEffect(() => {
        if(request !== ''){
              fetchData();
        }
  }, [request]);


  return (
      <>
      <input
          className="col-3" type="text" placeholder='Search some photos...' value={request}
          onChange={(e) => setRequest(e.target.value)}/>

         <div className="main">
             {
                 gallery.map((img) =>
                     <div className="gallery" key={img.id}>
                         <div className="gallery__column">
                             <a href={img.urls.full} target="_blank" className="gallery__link">
                                 <figure className="gallery__thumb">
                                     <img src={img.urls.regular} alt={img.user.name} className="gallery__image"/>
                                     <figcaption className="gallery__caption">{img.user.name} Likes: {img.likes}</figcaption>
                                 </figure>
                             </a>
                         </div>
                     </div>
             )
             }
         </div>
          </>
  );
  }

export default App;

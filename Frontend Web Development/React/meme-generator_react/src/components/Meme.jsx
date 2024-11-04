import React, { useEffect, useState } from "react";


const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  })

  const [memesData, setMemesData] = useState([]);

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then((resp)=>{
      return resp.json();
    }).then((data)=>{
      setMemesData(data.data.memes);
    })
  },[])

  const fetchData = (e) => {
    e.preventDefault();

      const randomNum = Math.floor(Math.random() * memesData.length);
      setMeme((prevVal)=>{
        return {
          ...prevVal,
          randomImage : memesData[randomNum].url
        }
      })

  };

  return (
    <section className="meme-section">
      <form className="form">
        <div className="form-input__container">
          <label htmlFor="top-text">
            Top Text
            <input
              type="text"
              name=""
              id=""
              className="form-input"
              placeholder="Shut up"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="bottom-text">
            Bottom Text
            <input
              type="text"
              name=""
              id=""
              className="form-input"
              placeholder="And take my money"
            />
          </label>
        </div>
        <button className="form-button" onClick={fetchData}>
          Get a new meme image 😺
        </button>
      </form>
      <div className="result">
        <img src={meme.randomImage} alt="image" />
      </div>
    </section>
  );
};

export default Meme;

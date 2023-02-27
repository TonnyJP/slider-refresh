import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [ index, setIndex ] = React.useState(0)
  const peoples = data;
  const lastIndex = data.length - 1;

 React.useEffect(() => {
  if(index < 0){
    setIndex(lastIndex)
  }
  if(index > lastIndex){
    setIndex(0)
  }
 },[index, peoples, lastIndex])

 React.useEffect(() => {
   const slider = setInterval(() => {
    setIndex(index +1)
  }, 3000)

  return () => {
    clearInterval(slider)
  }
 }, [index])
  
  return (<main className='section'>
    <div className='title'>
      <h2><span>/</span>Reviews</h2>
    </div>
    <div className='section-center'>
      {peoples.map((people, idx) => {
        const {image, quote, title, name, id} = people;
        let position = "nextSlide";
        
        if(idx === index){
          position= "activeSlide"
        }

        if(idx === index - 1 || (index === 0 &&  idx === lastIndex)){
          position="lastSlide"
        }
        return (
          <article key={id} className={position}>
            <img src={image} alt= {name} className="person-img" />
            <h4>{name}</h4>
            <p className='title'> {title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        )
      })}
      <button className='prev' onClick={() => setIndex(index - 1)} > < FiChevronLeft /> </button>
      <button className='next' onClick={() => setIndex(index + 1)} > < FiChevronRight /> </button>
    </div>
  </main>)
}

export default App;

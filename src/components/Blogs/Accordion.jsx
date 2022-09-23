import { useState } from 'react';

function Accordion({ entries }) {
  const [isEntryOpen, setIsEntryOpen] = useState({});

  function toggleEntry(title) {
    setIsEntryOpen({
      [title]: !isEntryOpen[title],
    });
  }

  return (
    <div className="accordion">
      {  entries.map( (title) => {
        const isOpen = isEntryOpen[title.tittle];
        return (
          <div key={title.id} className={`accordion__entry ${isOpen ? 'accordion__entry--open' : '' }`} >
            <button className="accordion__title" onClick={ () => toggleEntry(title.tittle) }>{title.tittle}</button>
            <div className="accordion__body">
                { title.body.map( (item, index) =>{
                    return(
                        <div key ={index}>
                        <h2 className='blog__heading'>{item.heading}</h2>
                        <p className='paragraph'>{item.para1}</p>
                        <p className = "blog__paragraph">{item.para2}</p>
                        </div>
                    );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;

import {useState} from 'react';
import './skills.css';

function Tabs({entries}){
    const [isEntryOpen, setIsEntryOpen] = useState({'Languages': 'Java'});
    
    function toggleEntry(tittle){
        setIsEntryOpen({
            [tittle]: !isEntryOpen[tittle],
        });
    }
    
    return(
    <div className="tabs">
        <div className='tab'>
            { entries.map( (item, index) => {
              const isOpen = isEntryOpen[item.tittle];
              return (
                <div key={index} className={`tabs__entries ${isOpen ? 'tabs__entries--open' : ''}`} >
                    <button key = {index} className='tabs_tittle' onClick={() => toggleEntry(item.tittle)} >{item.tittle}</button>
                </div>
              );
            })}
        </div>
        <div className='tabs__panel'>
            { entries.map( (item, index) => {
                return(
                  <div key={index} className={`tabs__body ${isEntryOpen[item.tittle] ? 'tabs__body--open' : ''}`}>
                      {item.skills.map((skil,index) => {
                          return (
                              <div key={index}>
                              <h6 className="skill__tittle">{skil.skill}</h6>
                              <div className='progressbar__info'>
                                  <div className={`s${skil.skill}`}>
                                      <span className='progresstext'>{skil.percentage}</span>
                                </div>
                               </div>
                              </div>
                          );
                      })}
                    </div>
                );
            })}
        </div>
    </div>
    );
};

export default Tabs;
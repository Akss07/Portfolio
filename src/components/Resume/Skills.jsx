import './skills.css';
import { useState } from 'react';
import {skillsDetails} from './../../data';
import Tabs from './Tabs';

function Skills(){
    const [description] = useState(skillsDetails);

    return(
        <div className="skills" id = "mSkills">
            <div className="container">
                <h3 className="tittle">Skills</h3>
                <div className="skills__info">
                    <div className="skills__container">
                            <Tabs entries = {description}/>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
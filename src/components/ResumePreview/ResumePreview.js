import React from 'react'
import './ResumePreview.scss'
import EducationIcon from '../../assets/icons/education.svg';
import ExperienceIcon from '../../assets/icons/tools.svg';
import SkillsIcon from '../../assets/icons/skills.svg';

function ResumePreview(props) {

    const { personal, experience, skills, education } = props.profile;

    

      const isSectionValid = (sectionArray) => {
        let isValid = false;

        sectionArray.map(section => {
            return Object.values(section).map(value => {
                if (value) {
                    isValid = true;
                }
                return null;
            });

        });

        return isValid;
    };

    let showSkills = skills && skills.length > 0;
    let showEducation = isSectionValid(education);
    let showExperience = isSectionValid(experience);
 

    console.log('props', props.profile)
    return (
        <div className="Resume__Preview">
            {personal.name || personal.email || personal.address || personal.phone?
            <div className="PersonalDetails">
                {personal && personal.name ? <h2 className="PersonalDetails__Name">{personal.name}</h2> : ''}
                    <div className="PersonalDetails__ContactContainer">
                        {personal && personal.email ? <div className="PersonalDetails__Email"> {personal.email} </div>: ''}
                        {personal && personal.phone ? <div className="PersonalDetails__Phone"> {personal.phone} </div>: ''}
                    </div>
                {personal && personal.address ? <div className="PersonalDetails__Address"> {personal.address} </div>: ''}
            </div> : ""}

            { showEducation && <div className="EducationDetails">
                <div className="HeaderContainer">
                    <img src={EducationIcon} className="HeaderContainer__Icon"></img>
                    <h2 className="EducationDetails__Header">Education</h2>
                    <div className="Line"></div>
                </div>
                {education.map((item, index) => 
                    <div className={`EducationDetails__Card`}>
                        <div className="EducationDetails__Year">
                            {`${item.startYear ? `${item.startYear} -` : ''} ${item.isCurrent ? "present" : `${item.endYear ? item.endYear : ""}`}`}
                        </div>
                        <div className="ContentContainer">
                            <div className="EducationDetails__Degree">{item.degree}</div>
                            <div className="EducationDetails__Institute">{item.institute}</div>
                        </div>
                    </div>
                )}
            </div>}


           { showExperience && <div className="ExperienceDetails">
                <div className="HeaderContainer">
                    <img src={ExperienceIcon} className="HeaderContainer__Icon"></img>
                    <h2 className="ExperienceDetails__Header">Experience</h2>
                    <div className="Line"></div>
                </div>
                {experience.map((item, index) => 
                      <div className={`ExperienceDetails__Card`}>
                        <div className="ExperienceDetails__Year">
                            {`${item.startYear ? `${item.startYear} -` : ''} ${item.isCurrent ? "present" : `${item.endYear ? item.endYear : ""}`}`}
                        </div>
                        <div className="ContentContainer">
                            <div className="ExperienceDetails__Designation">{item.designation}</div>
                            <div className="ExperienceDetails__Company">{item.company}</div>
                        </div>
                    </div>
                )}
            </div>}

        { showSkills && <div className="SkillsDetails">
                <div className="HeaderContainer">
                    <img src={SkillsIcon} className="HeaderContainer__Icon"></img>
                    <h2 className="SkillsDetails__Header">Skills</h2>
                    <div className="Line"></div>
                </div>
                {
                    skills.map((skill, index) =>
                    <span key={index} className="SkillsDetails__Tag">{skill}</span>)
                }
            </div>}

        </div>
    )
}

export default ResumePreview

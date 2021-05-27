import React, { useRef, useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./CreateResume.scss";
import ResumePreview from "../../components/ResumePreview/ResumePreview";
import { setResumeProfile } from "../../redux/actions/action";
import { DEFAULT_SKILLS } from "../../config/SampleData";
import { useReactToPrint } from "react-to-print";

const CreateResume = (props) => {
  const downloadRef = useRef();
  const handleDownloadResume = useReactToPrint({
    content: () => downloadRef.current,
  });

  const formRef = useRef();
  useEffect(() => {
    formRef.current.focus();
  }, []);

  const profileDetails = props.profileDetails;

  let defaultSkills = DEFAULT_SKILLS;

  const handlePersonalDetailsInputChange = (e, sectionDetails = "personal") => {
    let key = e.target.name;
    let value = e.target.value;
    props.setProfileDetails({
      ...props.profileDetails,
      [sectionDetails]: {
        ...props.profileDetails[sectionDetails],
        [key]: value,
      },
    });
  };

  const handleEducationFormInputChange = (event, section, index) => {
    let key = event.target.name;
    let value = key === "isCurrent" ? event.target.checked : event.target.value;

    let educationDetails = [...props.profileDetails[section]];
    educationDetails[index] = { ...educationDetails[index], [key]: value };

    props.setProfileDetails({
      ...props.profileDetails,
      [section]: educationDetails,
    });
  };

  const handleEducationAddition = (event, index) => {
    let section = "education",
      education_template = {
        degree: "",
        institute: "",
        startYear: "",
        endYear: "",
        isCurrent: "",
      };

    let educationDetails = [...props.profileDetails[section]];
    educationDetails.push(education_template);

    props.setProfileDetails({
      ...props.profileDetails,
      [section]: educationDetails,
    });
  };

  const handleEducationDeletion = (event, index) => {
    let section = "education";
    let educationDetails = [...props.profileDetails[section]];
    educationDetails.splice(index, 1);

    props.setProfileDetails({
      ...props.profileDetails,
      [section]: educationDetails,
    });
  };

  const handleSkillChange = (value) => {
    let section = "skills",
      updatedSkills = [];

    value.map((v) => {
      if (typeof v === "string") {
        updatedSkills.push(v);
      } else if (typeof v === "object") {
        updatedSkills.push(v.label);
      }

      return null;
    });

    props.setProfileDetails({
      ...props.profileDetails,
      [section]: updatedSkills,
    });
  };

  const handleExperienceFormInputChange = (event, section, index) => {
    let key = event.target.name;
    let value = key === "isCurrent" ? event.target.checked : event.target.value;

    let experienceDetails = [...props.profileDetails[section]];
    experienceDetails[index] = { ...experienceDetails[index], [key]: value };

    props.setProfileDetails({
      ...props.profileDetails,
      [section]: experienceDetails,
    });
  };

  const handleExperienceAddition = (event, index) => {
    let section = "experience",
      experience_template = {
        designation: "",
        company: "",
        startYear: "",
        endYear: "",
        isCurrent: "",
      };

    let experienceDetails = [...props.profileDetails[section]];
    experienceDetails.push(experience_template);

    props.setProfileDetails({
      ...props.profileDetails,
      [section]: experienceDetails,
    });
  };

  const handleExperienceDeletion = (event, index) => {
    let section = "experience";
    let experienceDetails = [...props.profileDetails[section]];
    experienceDetails.splice(index, 1);

    props.setProfile({ ...props.profileDetails, [section]: experienceDetails });
  };

  const getYearListTemplate = () => {
    let dateTemplate = [],
      currentYear = new Date().getFullYear(),
      previousYear = "1920";

    for (let year = currentYear; year >= previousYear; year--) {
      dateTemplate.push(
        <option value={year} key={year}>
          {year}
        </option>
      );
    }

    return dateTemplate;
  };

  return (
    <Container fluid>
      <NavBar title="Create your resume" />
      <Row className="ResumeActions">
        <Col>
          <div className="Actions">
            <Button variant="success" onClick={handleDownloadResume}>
              Download Resume
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="ResumeContainer justify-content-md-center">
        <Col>
          <div className="ResumeContent">
            <div className="FormWrapper">
              <div className="CardContent Personal--container">
                <Card>
                  <Card.Header>
                    <h2>Personal Details</h2>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Row>
                        <Col>
                          <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              required
                              name="name"
                              type="text"
                              placeholder="Enter name"
                              ref={formRef}
                              value={
                                profileDetails.personal
                                  ? profileDetails.personal.name
                                  : ""
                              }
                              onChange={(e) =>
                                handlePersonalDetailsInputChange(e)
                              }
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Invalid name !!!
                            </Form.Control.Feedback>
                          </Form.Group>{" "}
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col sm={6}>
                          <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              name="email"
                              type="email"
                              placeholder="Enter email"
                              value={
                                profileDetails.personal
                                  ? profileDetails.personal.email
                                  : ""
                              }
                              onChange={(e) =>
                                handlePersonalDetailsInputChange(e)
                              }
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Invalid email !!!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              required
                              name="phone"
                              type="tel"
                              placeholder="Enter phone number"
                              pattern="^[6-9]\d{9}$"
                              value={
                                profileDetails.personal
                                  ? profileDetails.personal.phone
                                  : ""
                              }
                              onChange={(e) =>
                                handlePersonalDetailsInputChange(e)
                              }
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Invalid phone number !!!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              required
                              name="address"
                              as="textarea"
                              rows={3}
                              style={{ resize: "none" }}
                              value={
                                profileDetails.personal
                                  ? profileDetails.personal.address
                                  : ""
                              }
                              onChange={(e) =>
                                handlePersonalDetailsInputChange(e)
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
              <div className="CardContent Eduction--container">
                <Card>
                  <Card.Header>
                    <h2>Education</h2>
                  </Card.Header>
                  <Card.Body>
                    {profileDetails.education &&
                      profileDetails.education.map((edu_item, index) => (
                        <div className="EducationDetails__item" key={index}>
                          <Form>
                            <Form.Row>
                              <Col>
                                <Form.Group
                                  controlId={`formDegree-education-${index}`}
                                >
                                  <Form.Label>Degree</Form.Label>
                                  <Form.Control
                                    required
                                    name="degree"
                                    type="text"
                                    placeholder="Enter degree"
                                    value={edu_item.degree}
                                    onChange={(e) =>
                                      handleEducationFormInputChange(
                                        e,
                                        "education",
                                        index
                                      )
                                    }
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                    Invalid degree !!!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col>
                                <Form.Group
                                  controlId={`formInstitute-education-${index}`}
                                >
                                  <Form.Label>Institute</Form.Label>
                                  <Form.Control
                                    required
                                    name="institute"
                                    type="email"
                                    placeholder="Enter institute"
                                    value={edu_item.institute}
                                    onChange={(e) =>
                                      handleEducationFormInputChange(
                                        e,
                                        "education",
                                        index
                                      )
                                    }
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                    Invalid institute !!!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col>
                                <Form.Group
                                  controlId={`formStartYear-education-${index}`}
                                >
                                  <Form.Label>Start Year</Form.Label>
                                  <Form.Control
                                    required
                                    custom
                                    as="select"
                                    name="startYear"
                                    value={edu_item.startYear}
                                    onChange={(e) =>
                                      handleEducationFormInputChange(
                                        e,
                                        "education",
                                        index
                                      )
                                    }
                                  >
                                    {getYearListTemplate()}
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group
                                  controlId={`formEndYear-education-${index}`}
                                >
                                  <Form.Label>End Year</Form.Label>
                                  <Form.Control
                                    required
                                    custom
                                    as="select"
                                    name="endYear"
                                    value={edu_item.endYear}
                                    onChange={(e) =>
                                      handleEducationFormInputChange(
                                        e,
                                        "education",
                                        index
                                      )
                                    }
                                  >
                                    {getYearListTemplate()}
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col xs={{ offset: 6 }}>
                                <Form.Check
                                  custom
                                  type="checkbox"
                                  id={`formIsCurrent-education-${index}`}
                                  label="Present (Current)"
                                  name="isCurrent"
                                  checked={edu_item.isCurrent}
                                  onChange={(e) =>
                                    handleEducationFormInputChange(
                                      e,
                                      "education",
                                      index
                                    )
                                  }
                                />
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col
                                className={
                                  index === profileDetails.experience.length - 1
                                    ? "ActionButtons"
                                    : "ActionButtons flex"
                                }
                              >
                                {index ===
                                  profileDetails.education.length - 1 && (
                                  <Button
                                    className="mt-4"
                                    variant="primary"
                                    onClick={(e) =>
                                      handleEducationAddition(e, index)
                                    }
                                  >
                                    Add Education
                                  </Button>
                                )}
                                {(index > 0 ||
                                  profileDetails.education.length > 1) && (
                                  <Button
                                    className="mt-4"
                                    variant="outline-danger"
                                    onClick={(e) =>
                                      handleEducationDeletion(e, index)
                                    }
                                  >
                                    Delete Education
                                  </Button>
                                )}
                              </Col>
                            </Form.Row>
                          </Form>
                        </div>
                      ))}
                  </Card.Body>
                </Card>
              </div>
              <div className="CardContent Experience--container">
                <Card>
                  <Card.Header>
                    <h2>Experience</h2>
                  </Card.Header>
                  <Card.Body>
                    {profileDetails.experience &&
                      profileDetails.experience.map((exp_item, index) => (
                        <div className="ExperienceDetails__item" key={index}>
                          <Form>
                            <Form.Row>
                              <Col>
                                <Form.Group
                                  controlId={`formDesignation-education-${index}`}
                                >
                                  <Form.Label>Designation</Form.Label>
                                  <Form.Control
                                    required
                                    name="designation"
                                    type="text"
                                    placeholder="Enter designation"
                                    value={exp_item.designation}
                                    onChange={(e) =>
                                      handleExperienceFormInputChange(
                                        e,
                                        "experience",
                                        index
                                      )
                                    }
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                    Invalid designation !!!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col>
                                <Form.Group
                                  controlId={`formCompany-education-${index}`}
                                >
                                  <Form.Label>Company</Form.Label>
                                  <Form.Control
                                    required
                                    name="company"
                                    type="email"
                                    placeholder="Enter company"
                                    value={exp_item.company}
                                    onChange={(e) =>
                                      handleExperienceFormInputChange(
                                        e,
                                        "experience",
                                        index
                                      )
                                    }
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                    Invalid company !!!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col>
                                <Form.Group
                                  controlId={`formStartYear-education-${index}`}
                                >
                                  <Form.Label>Start Year</Form.Label>
                                  <Form.Control
                                    required
                                    custom
                                    as="select"
                                    name="startYear"
                                    value={exp_item.startYear}
                                    onChange={(e) =>
                                      handleExperienceFormInputChange(
                                        e,
                                        "experience",
                                        index
                                      )
                                    }
                                  >
                                    {getYearListTemplate()}
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group
                                  controlId={`formEndYear-education-${index}`}
                                >
                                  <Form.Label>End Year</Form.Label>
                                  <Form.Control
                                    required
                                    custom
                                    as="select"
                                    name="endYear"
                                    value={exp_item.endYear}
                                    onChange={(e) =>
                                      handleExperienceFormInputChange(
                                        e,
                                        "experience",
                                        index
                                      )
                                    }
                                  >
                                    {getYearListTemplate()}
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col xs={{ offset: 6 }}>
                                <Form.Check
                                  custom
                                  type="checkbox"
                                  id={`formIsCurrent-experience-${index}`}
                                  label="Present (Current)"
                                  name="isCurrent"
                                  checked={exp_item.isCurrent}
                                  onChange={(e) =>
                                    handleExperienceFormInputChange(
                                      e,
                                      "experience",
                                      index
                                    )
                                  }
                                />
                              </Col>
                            </Form.Row>
                            <Form.Row>
                              <Col
                                className={
                                  index === profileDetails.experience.length - 1
                                    ? "ActionButtons"
                                    : "ActionButtons__End"
                                }
                              >
                                {index ===
                                  profileDetails.experience.length - 1 && (
                                  <Button
                                    className="mt-4"
                                    variant="primary"
                                    onClick={(e) =>
                                      handleExperienceAddition(e, index)
                                    }
                                  >
                                    Add Experience
                                  </Button>
                                )}
                                {(index > 0 ||
                                  profileDetails.experience.length > 1) && (
                                  <Button
                                    className="mt-4"
                                    variant="outline-danger"
                                    onClick={(e) =>
                                      handleExperienceDeletion(e, index)
                                    }
                                  >
                                    Delete Experience
                                  </Button>
                                )}
                              </Col>
                            </Form.Row>
                          </Form>
                        </div>
                      ))}
                  </Card.Body>
                </Card>
              </div>
              <div className="CardContent Skills--container">
                <Card>
                  <Card.Header>
                    <h2>Skills</h2>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Row>
                        <Col>
                          <Form.Group controlId="formSkills">
                            <Form.Label>Skills</Form.Label>
                            <Typeahead
                              multiple
                              allowNew
                              id="formSkills"
                              onChange={handleSkillChange}
                              newSelectionPrefix="Add a new skill : "
                              options={defaultSkills}
                              placeholder="Choose skills..."
                              selected={profileDetails.skills}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Invalid skills !!!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="ResumePreviewWrapper" ref={downloadRef}>
              <ResumePreview profile={profileDetails} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    profileDetails: state.ResumeReducer.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileDetails: (profile) => dispatch(setResumeProfile(profile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateResume);

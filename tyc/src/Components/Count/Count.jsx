import '../Count/Count.css'
import { useState, useEffect } from 'react';

export default function Count() {
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfTeachers, setNumberOfTeachers] = useState(0);
  const [numberOfCertificates, setNumberOfCertificates] = useState(0);
  const [numberofCourse, setNumberOfCourse] = useState(0);


  useEffect(() => {
    const studentsInterval = setInterval(() => {
      setNumberOfStudents((prevCount) => {
        if (prevCount === 500) {
          clearInterval(studentsInterval);
          return 500;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);

    const teachersInterval = setInterval(() => {
      setNumberOfTeachers((prevCount) => {
        if (prevCount === 30) {
          clearInterval(teachersInterval);
          return 30;
        } else {
          return prevCount + 1;
        }
      });
    }, 500);

    const courseInterval = setInterval(() => {
      setNumberOfCourse((prevCount) => {
        if (prevCount === 15) {
          clearInterval(courseInterval);
          return 15;
        } else {
          return prevCount + 1;
        }
      });
    }, 500);
    const certificatesInterval = setInterval(() => {
      setNumberOfCertificates((prevCount) => {
        if (prevCount === 13) {
          clearInterval(certificatesInterval);
          return 13;
        } else {
          return prevCount + 1;
        }
      });
    }, 500);

    return () => {
      clearInterval(studentsInterval);
      clearInterval(teachersInterval);
      clearInterval(certificatesInterval);
      clearInterval(courseInterval);
    };
  }, []);
  return (
    <>
      <div className="container4">

        <div className="totalnumber">



          <div className="newback">


            <div className="courses">

              <div className="number">
                <span>{numberOfTeachers}</span>
              </div>
              <div className="Heading3">
                <span>Certified Teachers</span>
              </div>
            </div>
          </div>
          <div className="newback">
            <div className="courses">
              <div className="number">
                <span>{numberOfStudents}</span>
              </div>
              <div className="Heading3">
                <span>Students</span>
              </div>
            </div>
          </div>
          <div className="newback">
            <div className="courses">

              <div className="number">
                <span>{numberofCourse}</span>
              </div>
              <div className="Heading3">
                <span>Courses</span>
              </div>
            </div>
          </div>
          <div className="newback">
            <div className="courses">
              <div className="number">
                <span>{numberOfCertificates}</span>
              </div>
              <div className="Heading3">
                <span>Positions In Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

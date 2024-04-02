import React from "react";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import CardComp from "../../components/CardComp/CardComp";
import questionsData from "../../components/CardComp/questions.json";

const Page = ({ userId }) => {
  // console.log(userId);
  return (
    <div className="App">
      <NavbarComp />
      <h3 className="heading"> CRYPTOGRAPHY</h3>
      <div className="d-flex flex-wrap justify-content-evenly">
        {questionsData.map((question) => (
          <CardComp
            key={question.id}
            title={question.question}
            description={`${question.points} points`}
            alertDesc="Description of the question"
            hintUrl="URL to hint if available"
            correctAnswer={question.answer}
            userId={userId} // Pass the userId prop here
          />
        ))}
      </div>

      <h3 className="heading">FORENSICS</h3>
      <div className="d-flex flex-wrap justify-content-evenly">
        {questionsData.map((question) => (
          <CardComp
            key={question.id}
            title={question.question}
            description={`${question.points} points`}
            alertDesc="Description of the question"
            hintUrl="URL to hint if available"
            correctAnswer={question.answer}
            userId={userId} // Pass the userId prop here
          />
        ))}
      </div>

      <h3 className="heading">WEB</h3>
      <div className="d-flex flex-wrap justify-content-evenly">
        {questionsData.map((question) => (
          <CardComp
            key={question.id}
            title={question.question}
            description={`${question.points} points`}
            alertDesc="Description of the question"
            hintUrl="URL to hint if available"
            correctAnswer={question.answer}
            userId={userId} // Pass the userId prop here
          />
        ))}
      </div>
      
      <h3 className="heading">OSINT</h3>
      <div className="d-flex flex-wrap justify-content-evenly">
        {questionsData.map((question) => (
          <CardComp
            key={question.id}
            title={question.question}
            description={`${question.points} points`}
            alertDesc="Description of the question"
            hintUrl="URL to hint if available"
            correctAnswer={question.answer}
            userId={userId} // Pass the userId prop here
          />
        ))}
      </div>
      {/* Other sections with CardComp */}
    </div>
  );
};

export default Page;

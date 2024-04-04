import React from "react";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import CardComp from "../../components/CardComp/CardComp";
import questionsData from "../../components/CardComp/questions.json";
import { useNavigate } from "react-router-dom";

const Page = ({ id }) => {
  const navigate = useNavigate();
  if (id == null) {
    navigate("/homepage");
  }
  
  return (
    <div className="App">
      <NavbarComp id={id} />
      <div className="d-flex flex-wrap justify-content-evenly">
      
        {questionsData.map((question) => (
          <CardComp
            key={question.id}
            title={question.title}
            domain={question.domain}
            qdes={question.question}
            description={`${question.points} points`}
            alertDesc="Description of the question"
            flagPattern={question.Format}
            hintUrl={question.attachment}
            correctAnswer={question.answer}
            userId={id}
            questionsData={questionsData}
            name={question.Name}
            hint={question.Hint}
          />
        ))}
      </div>
      {/* Other sections with CardComp */}
    </div>
  );
};

export default Page;

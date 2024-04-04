import React, { useEffect, useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import "./cardComp.css";
import questionsData from "./questions.json";

const CardComp = ({
  qid,
  title,
  domain,
  qdes,
  description,
  alertDesc,
  hintUrl,
  correctAnswer,
  userId,
  flagPattern,
  Hint,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userScore, setUserScore] = useState({ score: 0, scorearr: [] });

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleHintButtonClick = () => {
    if (hintUrl) {
      window.open(hintUrl, "_blank");
    }
  };

  const getQuestionPoints = () => {
    console.log("Working 1");
    const question = questionsData.find((item) => item.title === title);
    return question.points;
  };

  //   const handleSave = async () => {
  //     try {
  //       // Fetch user score and question array
  //       const users = await fetchUserScore();
  //       var updatedScore = users.score;
  //       var questionArr = users.questionArr;

  //       // Check if the question ID already exists in the user's question array
  //       if (questionArr.includes(qid)) {
  //         alert("Question already submitted");
  //         return;
  //       }

  //       // Update user's question array with the new question ID

  //       // Update user's score if the answer is correct
  //       if (
  //         correctAnswer &&
  //         textInput.toLowerCase() === correctAnswer.toLowerCase()
  //       ) {
  //         setIsCorrect(true);
  //         // Assuming getQuestionPoints() returns the points for the correct answer
  //         updatedScore += getQuestionPoints();
  //         questionArr.push(qid);
  //       }

  //       // Update user's score and question array in the database
  //       const response = await fetch(
  //         `https://ctfserver.vercel.app/updateScore/${userId}`,
  //         {
  //           method: "PATCH",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             score: updatedScore,
  //             questionArr: questionArr,
  //           }),
  //         }
  //       );

  //       // Check if the response is successful
  //       if (!response.ok) {
  //         throw new Error("Failed to update user score");
  //       }

  //       // Update the user score in the state
  //       setUserScore({
  //         score: updatedScore,
  //         scorearr: users.scorearr.concat(updatedScore),
  //       });
  //     } catch (error) {
  //       console.error("Error updating user score:", error);
  //     }

  //     // Reset input field
  //     setTextInput("");
  //   };

  //   const fetchUserScore = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://ctfserver.vercel.app/getspecificuser/${userId}`
  //       );
  //       if (!res.ok) {
  //         throw new Error("Cannot get user");
  //       }

  //       const data = await res.json();
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching user score:", error);
  //     }
  //   };
  const handleSave = async () => {
    try {
      // Fetch user score and question array
      const users = await fetchUserScore();
      var updatedScore = users.score;
      let questionArr = users.questionArr;

      // Check if the question ID already exists in the user's question array
      if (questionArr.includes(qid)) {
        alert("Question already submitted");
        return;
      }
      console.log(questionArr);

      // Update user's question array with the new question ID

      console.log(questionArr);
      // Update user's score if the answer is correct
      if (
        correctAnswer &&
        textInput.toLowerCase() === correctAnswer.toLowerCase()
      ) {
        setIsCorrect(true);
        updatedScore += getQuestionPoints();
        questionArr.push(qid);
        alert("Correct answer");
      } else {
        alert("Wrong answer!!!");
      }

      // Update user's score and question array in the database
      const response = await fetch(
        `https://ctfserver.vercel.app/updateScore/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            score: updatedScore,
            questionArr: questionArr,
          }),
        }
      );

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to update user score");
      }

      console.log(response);
      // Update the user score in the state
      setUserScore({
        score: updatedScore,
        scorearr: [...userScore.scorearr, updatedScore],
      });
    } catch (error) {
      console.error("Error updating user score:", error);
    }

    // Reset input field
    setTextInput("");
  };

  const fetchUserScore = async () => {
    try {
      const res = await fetch(
        `https://ctfserver.vercel.app/getspecificuser/${userId}`
      );
      if (!res.ok) {
        throw new Error("Cannot get user");
      }

      const data = await res.json();
      console.log(data);
      setUserScore({ score: data.score, scorearr: data.scorearr });
      return data;
    } catch (error) {
      console.error("Error fetching user score:", error);
    }
  };
  return (
    <>
      <div onClick={handleCardClick}>
        <Card
          style={{
            width: "18rem",
            borderRadius: "20px",
            backgroundColor: isCorrect
              ? "#4CAF50"
              : submitted
              ? "#f07b84"
              : "inherit",
            color: submitted ? "white" : "inherit",
          }}
          className="mx-5 my-5 custom-card"
          id="custom-card"
        >
          <Card.Body>
            <Card.Title style={{ color: "red" }}>{domain}</Card.Title>
            <Card.Title>{title}</Card.Title>

            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Modal id="modal" show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{alertDesc}</p>
          <Card.Text>{qdes}</Card.Text>
          {hintUrl && (
            <Button variant="info" onClick={handleHintButtonClick}>
              Attachment
            </Button>
          )}
          <Form>
            {Hint && ( // Use conditional rendering with a truthy check
              <Form.Group controlId="formTextInput">
                <Form.Label className="mt-3">Hint: {Hint}</Form.Label>
              </Form.Group>
            )}
          </Form>
          <Form>
            <Form.Group controlId="formTextInput">
              <Form.Label className="mt-3">
                Flag Format : {flagPattern}
              </Form.Label>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formTextInput">
              <Form.Label className="mt-3">Your response :</Form.Label>
              <Form.Control
                type="text"
                value={textInput}
                onChange={handleInputChange}
                placeholder="CTF(...)"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardComp;

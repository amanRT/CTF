import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './cardComp.css';
import questionsData from "./questions.json";


const CardComp = ({ title, description, alertDesc, hintUrl, correctAnswer, userId }) => {
    const [showModal, setShowModal] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [submitted, setSubmitted] = useState(false); 
    const [isCorrect, setIsCorrect] = useState(false); 
    const [userScore, setUserScore] = useState(0); 

    useEffect(() => {
        const fetchUserScore = async () => {
            console.log(userId);
            try {
                const res = await fetch(`http://localhost:3000/getspecificuser/${userId}`);
               
                if (!res.ok) {
                    throw new Error("Cannot get user");
                }
                const data = await res.json();
                setUserScore(data.score);
            } catch (error) {
                console.error('Error fetching user score:', error);
            }
        };
        fetchUserScore();
    }, [userId]);

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
            window.open(hintUrl, '_blank');
        }
    };

    const handleSave = async () => {
        setShowModal(false);
        setSubmitted(true); // Set submitted state to true
        // Check if the submitted answer is correct
        if (correctAnswer && textInput.toLowerCase() === correctAnswer.toLowerCase()) {
            setIsCorrect(true);
            console.log(userScore);
            console.log(getQuestionPoints());
            const updatedScore = userScore + getQuestionPoints(); // Calculate updated score
            try {
                const response = await fetch(`http://localhost:3000/updateScore/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ score: updatedScore })
                });
                if (!response.ok) {
                    throw new Error('Failed to update user score');
                }
                setUserScore({ score: updatedScore }); // Update user's score and scorearr in state
            } catch (error) {
                console.error('Error updating user score:', error);
            }
        }
        setTextInput('');
    };

    const getQuestionPoints = () => {
        const question = questionsData.find((item) => item.question === title);
        return question ? question.points : 0;
    };

    return (
        <>
            <div onClick={handleCardClick}>
                <Card style={{ width: '18rem', borderRadius: '20px', backgroundColor: isCorrect ? '#4CAF50' : (submitted ? '#f07b84' : 'inherit'), color: submitted ? 'white' : 'inherit' }} className='mx-5 my-5 custom-card' id='custom-card'>
                    <Card.Body>
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
                    {hintUrl && (
                        <Button variant="info" onClick={handleHintButtonClick}>
                            View Hint
                        </Button>
                    )}
                    <Form>
                        <Form.Group controlId="formTextInput">
                            <Form.Label className='mt-3'>Your response :</Form.Label>
                            <Form.Control type="text" value={textInput} onChange={handleInputChange} placeholder="CTF(...)" />
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
}

export default CardComp;

import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './cardComp.css';
import questionsData from "./questions.json";

const CardComp = ({ title,domain,qdes, description, alertDesc, hintUrl, correctAnswer, userId,flagPattern, Hint  }) => {
    const [showModal, setShowModal] = useState(false);
    const [textInput, setTextInput] = useState('');
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
            window.open(hintUrl, '_blank');
        }
    };

    const getQuestionPoints = () => {
        const question = questionsData.find((item) => item.question === title);
        return question.points
    };

    const handleSave = async () => {
        if(userScore.scorearr.length >= 8) return;
        setShowModal(false);
        setSubmitted(true); 
        
        var updatedScore ;
        var updatedScoreArr
       
        if (correctAnswer && textInput.toLowerCase() === correctAnswer.toLowerCase()) {
            setIsCorrect(true);
             updatedScore = userScore.score + getQuestionPoints();
            // Create a new array with updated score added
        }
        else{
            updatedScore = userScore.score;
        }
        updatedScoreArr = [...userScore.scorearr, updatedScore]; 
            try {
                const response = await fetch(`http://localhost:3000/updateScore/${userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ score: updatedScore, scorearr: updatedScoreArr })
                });
                if (!response.ok) {
                    throw new Error('Failed to update user score');
                }
                setUserScore({ score: updatedScore, scorearr: updatedScoreArr });
            } catch (error) {
                console.error('Error updating user score:', error);
            }
        
        setTextInput('');
    };
    

    useEffect(() => {
        const fetchUserScore = async () => {
            try {
                const res = await fetch(`http://localhost:3000/getspecificuser/${userId}`);
                if (!res.ok) {
                    throw new Error("Cannot get user");
                }
                const data = await res.json();
                setUserScore({ score: data.score, scorearr: data.scorearr });
            } catch (error) {
                console.error('Error fetching user score:', error);
            }
        };
        fetchUserScore();
    }, [handleSave]);

    return (
        <>
            <div onClick={handleCardClick}>
                <Card style={{ width: '18rem', borderRadius: '20px', backgroundColor: isCorrect ? '#4CAF50' : (submitted ? '#f07b84' : 'inherit'), color: submitted ? 'white' : 'inherit' }} className='mx-5 my-5 custom-card' id='custom-card'>
                    <Card.Body>
                    <Card.Title style={{ color: 'red' }}>{domain}</Card.Title>
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
                                <Form.Label className='mt-3'>Hint: {Hint}</Form.Label>
                            </Form.Group>
                        )}
                    </Form>
                    <Form>
                        <Form.Group controlId="formTextInput">
                            <Form.Label className='mt-3'>Flag Format : {flagPattern}</Form.Label>
                        </Form.Group>
                    </Form>
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

import './Input.css';
import { useContext, useState } from 'react';
import { UpdateInput, Meeting } from './../../App';

const Input: React.FC = () => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const setMeetings = useContext(UpdateInput);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [hours, minutes] = time.split(':').map(Number);
    const currentDate = new Date();
    currentDate.setHours(hours, minutes, 0, 0); // Set the hours and minutes

    const newMeeting: Meeting = { defaultText: text, date: currentDate };
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
    setText(''); // Clear the input fields after submission
    setTime('');
  };

  const isButtonDisabled = text.trim() === '' || time.trim() === '';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="InputText">Enter Meeting Information</label>
        <br />
        <textarea
          id="textInput"
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <br />
        <label id="timeSelect" className="InputText">Select Time</label>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
        />
        <br />
        <label className="InputText">Please enter meeting information and select a time to book the meeting</label>
        <br></br>
        <button id="button" type="submit" disabled={isButtonDisabled}>
          Book
        </button>
      </form>
    </div>
  );
};

export default Input;

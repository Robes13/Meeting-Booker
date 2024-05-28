import "./Meetings.css";
import React, { useContext } from 'react';
import { GetInput } from './../../App';

const Meetings: React.FC = () => {
  const meetings = useContext(GetInput);

  return (
    <div>
      <h2 className="Text">Meeting List</h2>
      <table>
        <thead>
          <tr className="Text">
            <th>Meeting Text</th>
            <th>Meeting Time</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index} className="Text">
              <td className="Text">{meeting.defaultText}</td>
              <td className="Text">{meeting.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;

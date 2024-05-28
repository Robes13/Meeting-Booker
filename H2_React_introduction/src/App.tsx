import { createContext, useState } from 'react';
import './App.css';
import Input from './Components/Inputs/Input';
import Meetings from './Components/Outputs/Meetings';

export type Meeting = { defaultText: string; date: Date };
export type MeetingType = Meeting[];

export const GetInput = createContext<MeetingType>([]);
export const UpdateInput = createContext<React.Dispatch<React.SetStateAction<MeetingType>>>(() => {});

function App() {
  const [meetings, setMeetings] = useState<MeetingType>([]);

  return (
    <>
      <GetInput.Provider value={meetings}>
        <UpdateInput.Provider value={setMeetings}>
          <Input />
          <Meetings />
        </UpdateInput.Provider>
      </GetInput.Provider>
    </>
  );
}

export default App;


import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import VoiceRecorder from "./Components/VoiceRecorder";
import Transcription from './Components/Transcription';
import Translation from './Components/Translation';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcriptionText, setTranscriptionText] = useState('');

  const handleTranscription = (text) => {
      console.log("Transcription received: ", text); // Log the transcription text
      setTranscriptionText(text); // Update the state with the transcription result
  };

  return (
    
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
      

      

      <Route path="/" element={<VoiceRecorder onRecordingComplete={setAudioBlob} />}>
      </Route>
      <Route path="/transcript" element={<Transcription audioBlob={audioBlob} onTranscriptionComplete={handleTranscription} />}>
      </Route>

      <Route path="/translate" element={ transcriptionText && <Translation transcriptionText={transcriptionText} />}>

      </Route>
      
   
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import VoiceRecorder from "./Components/VoiceRecorder";
// import Transcription from './Components/Transcription';
// import Translation from './Components/Translation';


// function App() {
//   const [step, setStep] = useState(1); // Manage the current step (1: VoiceRecorder, 2: Transcription, 3: Translation)
//   const [audioBlob, setAudioBlob] = useState(null); // Store the recorded audio blob
//   const [transcriptionText, setTranscriptionText] = useState(''); // Store the transcription result

//   const handleRecordingComplete = (blob) => {
//     setAudioBlob(blob); // Store the recorded audio blob
//     setStep(2); // Move to the Transcription step
//   };

//   const handleTranscriptionComplete = (text) => {
//     setTranscriptionText(text); // Store the transcription text
//     setStep(3); // Move to the Translation step
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       {step === 1 && (
//         <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
//       )}
//       {step === 2 && audioBlob && (
//         <Transcription
//           audioBlob={audioBlob}
//           onTranscriptionComplete={handleTranscriptionComplete}
//         />
//       )}
//       {step === 3 && transcriptionText && (
//         <Translation transcriptionText={transcriptionText} />
//       )}
//     </div>
//   );
// }

// export default App;

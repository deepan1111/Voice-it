
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { useNavigate } from 'react-router-dom';


const VoiceRecorder = ({ onRecordingComplete }) => {
  const [recording, setRecording] = useState(false);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);
  const navigate = useNavigate()

  const toggleRecording = () => {
    // setRecording(!recording);

    if (recording) {
      // Stop recording
      setRecording(false);
      setIsRecordingComplete(true); // Show the "Next" button after stopping
    } else {
      // Start recording
      setRecording(true);
      setIsRecordingComplete(false); // Hide the "Next" button while recording
    }
  };

  const handleStop = (recordedBlob) => {
    console.log('Recorded Blob:', recordedBlob);
    onRecordingComplete(recordedBlob.blob);
  };
  const navigateToTranscription = () => {
    navigate("/transcript"); // Adjust the route as per your app
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <button onClick={toggleRecording} className="relative inline-block text-lg group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">{recording ? 'Stop Recording' : 'Start Recording'}</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
{isRecordingComplete && (

<button type="button" onClick={navigateToTranscription} class="bg-gray-800 mt-6 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-slate-900 hover:text-black px-3">
      <div class="flex flex-row align-middle">
        <span class="mr-2">Next</span>
        <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </button>
      )}
      
      
      <div className='hidden'>
      <ReactMic
        record={recording}
        className="sound-wave"
        onStop={handleStop}
        mimeType="audio/webm"
      />
      </div>
      
    </div>
  );
};


export default VoiceRecorder;




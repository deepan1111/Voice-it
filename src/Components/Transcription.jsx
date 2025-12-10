


// import React, { useState } from 'react';
// import { AssemblyAI } from 'assemblyai';

// const Transcription = ({ audioBlob, onTranscriptionComplete }) => {
//   const [transcription, setTranscription] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const client = new AssemblyAI({
//     apiKey: '8d3d5cd0cc2a4a92bee5ed0165aa8063', // Replace with your API key
//   });

//   const params = {
//     audio: audioBlob,
//     speaker_labels: false,
//   };

//   const fetchTranscription = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const transcript = await client.transcripts.transcribe(params);

//       if (transcript.status === 'error') {
//         setError(`Transcription failed: ${transcript.error}`);
//       } else {
//         setTranscription(transcript.text);
//         onTranscriptionComplete(transcript.text); // Pass the transcription to App
//       }
//     } catch (err) {
//       setError('[BLANK AUDIO]');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Transcription</h1>
//         <button
//           onClick={fetchTranscription}
//           disabled={loading}
//           className={`px-6 py-3 rounded-lg font-medium text-white transition ${
//             loading
//               ? 'bg-gray-400 cursor-not-allowed'
//               : 'bg-blue-500 hover:bg-blue-600'
//           }`}
//         >
//           {loading ? 'Transcribing...' : 'Start Transcription'}
//         </button>

//         {error && (
//           <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
//         )}

//         {transcription && (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">
//               Transcription Result:
//             </h2>
//             <p className="text-gray-600 text-sm bg-gray-50 p-4 rounded-lg shadow-inner">
//               {transcription}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Transcription;

import React, { useState } from 'react';
import { AssemblyAI } from 'assemblyai';
import { useNavigate } from 'react-router-dom';

const Transcription = ({ audioBlob, onTranscriptionComplete }) => {
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const client = new AssemblyAI({
    apiKey: '8d3d5cd0cc2a4a92bee5ed0165aa8063', // Replace with your API key
  });

  const params = {
    audio: audioBlob,
    speaker_labels: false,
  };

  const fetchTranscription = async () => {
    setLoading(true);
    setError('');
    try {
      const transcript = await client.transcripts.transcribe(params);

      if (transcript.status === 'error') {
        setError(`Transcription failed: ${transcript.error}`);
      } else {
        setTranscription(transcript.text);
        onTranscriptionComplete(transcript.text); // Pass the transcription to App
      }
    } catch (err) {
      setError('[BLANK AUDIO]');
      console.error(err)
    } finally {
      setLoading(false);
    }
  };

  const navigateToTranslation = () => {
    navigate('/translate'); // Navigate to the translation page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className=" p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold scrp text-gray-800 mb-6">Transcription</h1>
        
        {/* Transcription Button */}
        <button
          onClick={fetchTranscription}
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-medium text-white transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? 'Transcribing...' : 'Transcript'}
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
        )}

        {/* Transcription Result */}
        {transcription && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Transcription Result:
            </h2>
            <p className="text-gray-600 text-sm bg-gray-50 p-4 rounded-lg shadow-inner">
              {transcription}
            </p>

            {/* Translate Button */}
            <button
              onClick={navigateToTranslation}
              className="mt-4 px-6 py-3 rounded-lg font-medium text-white bg-green-500 hover:bg-green-600 transition"
            >
              Translate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transcription;

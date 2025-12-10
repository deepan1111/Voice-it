// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const Translation = ({ transcriptionText }) => {
//     const [translatedText, setTranslatedText] = useState('');
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [targetLanguage, setTargetLanguage] = useState('es');
  
//     const translateText = async () => {
//       if (!transcriptionText) {
//         setError('No valid text to translate.');
//         return;
//       }
  
//       const apiUrl = 'https://api.mymemory.translated.net/get';
//       const params = {
//         q: transcriptionText,
//         langpair: `en|${targetLanguage}`,
//       };
  
//       setIsLoading(true);
//       setError(null);
  
//       try {
//         const response = await axios.get(apiUrl, { params });
//         setTranslatedText(response.data.responseData.translatedText);
//       } catch (err) {
//         console.error('Translation error:', err);
//         setError('Error translating text. Please try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     return (
//       <div className="flex flex-col items-center">
//         <h1 className="text-2xl font-bold mb-6">Translation</h1>
//         <div className="mb-4">
//           <label htmlFor="language-select" className="mr-2">Target Language:</label>
//           <select
//             id="language-select"
//             value={targetLanguage}
//             onChange={(e) => setTargetLanguage(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="es">Spanish</option>
//             <option value="de">German</option>
//             <option value="fr">French</option>
//             <option value="it">Italian</option>
//             <option value="ru">Russian</option>
//             <option value="zh">Chinese</option>
//             <option value="ja">Japanese</option>
//             <option value="ar">Arabic</option>
//           </select>
//         </div>
//         <button
//           onClick={translateText}
//           disabled={isLoading}
//           className={`px-6 py-2 text-white font-semibold rounded ${
//             isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
//           }`}
//         >
//           {isLoading ? 'Translating...' : 'Translate'}
//         </button>
//         {error && <p className="text-red-500 mt-4">{error}</p>}
//         {translatedText && (
//           <textarea
//             className="mt-4 p-2 w-full border rounded"
//             value={translatedText}
//             readOnly
//             rows="4"
//           />
//         )}
//       </div>
//     );
//   };

//   export default Translation


import React, { useState } from 'react';
import axios from 'axios';

const Translation = ({ transcriptionText }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState('es');

  const translateText = async () => {
    if (!transcriptionText) {
      setError('No valid text to translate.');
      return;
    }

    const apiUrl = 'https://api.mymemory.translated.net/get';
    const params = {
      q: transcriptionText,
      langpair: `en|${targetLanguage}`,
    };

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(apiUrl, { params });
      setTranslatedText(response.data.responseData.translatedText);
    } catch (err) {
      console.error('Translation error:', err);
      setError('Error translating text. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6  rounded-lg shadow-md flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Translation</h1>
        <div className="w-full">
          <label htmlFor="language-select" className="block text-gray-600 mb-2">Target Language:</label>
          <select
            id="language-select"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            
            <option value="ta">Tamil</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="it">Italian</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
    <option value="hi">Hindi</option>
    <option value="ta">Tamil</option>
    <option value="te">Telugu</option>
    <option value="ml">Malayalam</option>
    <option value="kn">Kannada</option>
    <option value="gu">Gujarati</option>
    <option value="mr">Marathi</option>
    <option value="bn">Bengali</option>
    <option value="pa">Punjabi</option>
    <option value="or">Odia</option>
    <option value="as">Assamese</option>
    <option value="ur">Urdu</option>
    <option value="ks">Kashmiri</option>
    <option value="sd">Sindhi</option>
    <option value="sa">Sanskrit</option>
    <option value="mai">Maithili</option>
    <option value="bho">Bhojpuri</option>
          </select>
        </div>
        <button
          onClick={translateText}
          disabled={isLoading}
          className={`w-full px-4 py-2 text-white font-semibold rounded shadow-md transition-all duration-300 ${
            isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {translatedText && (
          <textarea
            className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={translatedText}
            readOnly
            rows="4"
            placeholder="Your translated text will appear here..."
          />
        )}
      </div>
    </div>
  );
};

export default Translation;


  
// const Translation = ({ transcriptionText }) => {
//     const [translatedText, setTranslatedText] = useState('');
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [targetLanguage, setTargetLanguage] = useState('es'); // Default target language is Spanish

//     useEffect(() => {
//         const translateText = async () => {
//             if (!transcriptionText || transcriptionText.trim() === '') {
//                 setError('No valid text to translate.');
//                 return;
//             }

//             const apiUrl = 'https://api.mymemory.translated.net/get';
//             const params = {
//                 q: transcriptionText.trim(),
//                 langpair: `en|${targetLanguage}`, // Source: English, Target: Selected Language
//             };

//             setIsLoading(true);
//             setError(null);

//             try {
//                 const response = await axios.get(apiUrl, { params });
//                 if (response.data && response.data.responseData) {
//                     setTranslatedText(response.data.responseData.translatedText);
//                 } else {
//                     setError('No translation available.');
//                 }
//             } catch (err) {
//                 console.error('MyMemory API error:', err);
//                 setError('Error translating text. Please try again.');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         translateText();
//     }, [transcriptionText, targetLanguage]);

//     return (
//         <div>
//             <h2>Translation</h2>
//             <div>
//                 <label htmlFor="language-select">Select Target Language:</label>
//                 <select
//                     id="language-select"
//                     value={targetLanguage}
//                     onChange={(e) => setTargetLanguage(e.target.value)}
//                 >
//                     <option value="es">Spanish</option>
//                     <option value="de">German</option>
//                     <option value="fr">French</option>
//                     <option value="it">Italian</option>
//                     <option value="ru">Russian</option>
//                     <option value="zh">Chinese</option>
//                     <option value="ja">Japanese</option>
//                     <option value="ar">Arabic</option>
//                 </select>
//             </div>

//             {isLoading ? (
//                 <p>Translating...</p>
//             ) : error ? (
//                 <p style={{ color: 'red' }}>{error}</p>
//             ) : translatedText ? (
//                 <textarea
//                     value={translatedText}
//                     readOnly
//                     rows="4"
//                     cols="50"
//                     placeholder="Your translated text will appear here..."
//                 />
//             ) : (
//                 <p>Enter some text to translate.</p>
//             )}
//         </div>
//     );
// };

// export default Translation;
import React from 'react';
import styled from 'styled-components';

const GithubIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  
  & svg {
    height: 40px;
    
    @media screen and (min-width: 1024px) {
      height: 50px;    
    }
  }
`;

const SettingButton = styled.button`
  fill: #bf1650;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: none;
  color: white;
  border: none;
  
  & svg {
    height: 40px;
    
    @media screen and (min-width: 1024px) {
      height: 50px;    
    }
  }
`;

const BuildButotn = styled.button`
  fill: #bf1650;
  position: absolute;
  right: 90px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: none;
  color: white;
  border: none;

  & svg {
    height: 40px;
    
    @media screen and (min-width: 1024px) {
      height: 50px;    
    }
  }
`;

export default function ButtonGroup({ toggleBuilder, toggleSetting, showSetting, settingButton }) {
  return (
    <>
      <GithubIcon>
        <a href="https://github.com/bluebill1049/react-forme" target="_blank">
          <svg viewBox="0 0 496 512" height="40" aria-hidden="true" focusable="false" fill="currentColor">
            <path
              fill="white"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
        </a>
      </GithubIcon>
      <BuildButotn className="App-build" onClick={() => toggleBuilder(true)}>
        <svg viewBox="0 0 100 125">
          <path d="M91.672,79.919c-7.514-7.514-21.246-21.246-32.626-32.635l22.299-22.299l4.778,0.334c0.035,0.002,0.07,0.003,0.104,0.003   c0.539,0,1.041-0.292,1.305-0.769l7.275-13.113c0.324-0.582,0.222-1.308-0.25-1.779l-4.214-4.214   c-0.47-0.471-1.198-0.573-1.779-0.25l-13.113,7.276c-0.507,0.281-0.805,0.831-0.765,1.409l0.334,4.776L52.722,40.96   c-5.698-5.698-10.126-10.127-11.786-11.786c2.262-6.573,0.615-13.862-4.343-18.82c-4.888-4.888-11.999-6.588-18.561-4.438   c-0.023,0.008-0.042,0.02-0.065,0.029c-0.024,0.009-0.045,0.02-0.068,0.03c-0.165,0.072-0.311,0.169-0.435,0.289   c-0.007,0.007-0.016,0.008-0.023,0.015c-0.009,0.009-0.012,0.021-0.02,0.03c-0.122,0.128-0.219,0.274-0.289,0.435   c-0.01,0.022-0.018,0.044-0.026,0.067c-0.059,0.156-0.092,0.321-0.096,0.492c0,0.023,0,0.044,0.001,0.067   c0.003,0.143,0.02,0.286,0.067,0.429c0.008,0.024,0.021,0.044,0.03,0.066c0.009,0.022,0.019,0.043,0.029,0.065   c0.072,0.165,0.169,0.311,0.289,0.435c0.007,0.007,0.009,0.017,0.016,0.024l7.089,7.089c0.676,0.676,1.048,1.573,1.049,2.527   c0.001,0.953-0.37,1.848-1.044,2.522l-3.555,3.555c-1.392,1.391-3.657,1.387-5.049-0.005l-7.089-7.089   c-0.007-0.007-0.016-0.008-0.022-0.015c-0.124-0.12-0.271-0.217-0.436-0.29c-0.023-0.01-0.044-0.021-0.067-0.03   c-0.023-0.009-0.043-0.022-0.066-0.029c-0.141-0.046-0.284-0.063-0.425-0.066c-0.024-0.001-0.047-0.002-0.071-0.001   c-0.17,0.004-0.335,0.037-0.49,0.096c-0.023,0.009-0.044,0.016-0.066,0.026c-0.161,0.07-0.308,0.167-0.436,0.29   c-0.009,0.009-0.021,0.011-0.03,0.02c-0.007,0.007-0.009,0.016-0.015,0.023c-0.12,0.124-0.216,0.27-0.289,0.435   c-0.01,0.024-0.021,0.045-0.03,0.069c-0.009,0.023-0.021,0.043-0.029,0.066c-2.143,6.566-0.443,13.677,4.438,18.559   c3.495,3.494,8.147,5.349,12.891,5.349c1.986,0,3.984-0.346,5.923-1.012l7.518,7.519c-0.131-0.01-0.257-0.038-0.389-0.038   c-1.417,0-2.75,0.552-3.751,1.554L6.56,75.949c-1.003,1.002-1.555,2.335-1.555,3.752c0,1.417,0.552,2.75,1.555,3.752l2.295,2.296   c0.001,0.001,0.001,0.002,0.001,0.002c0.001,0.001,0.002,0.001,0.002,0.001l7.693,7.694C17.554,94.448,18.887,95,20.305,95   c1.418,0,2.751-0.552,3.752-1.554l26.438-26.439c1.003-1.002,1.555-2.335,1.555-3.752c0-0.131-0.028-0.257-0.038-0.387   l29.321,29.34c1.557,1.557,3.603,2.335,5.652,2.335c2.048,0,4.098-0.778,5.662-2.335c1.508-1.507,2.338-3.514,2.338-5.652   c0-2.144-0.831-4.155-2.338-5.662L91.672,79.919z M77.612,20.29c0.007-0.007,0.009-0.017,0.016-0.024   c0.122-0.127,0.219-0.274,0.29-0.437c0.009-0.02,0.019-0.038,0.027-0.058c0.06-0.154,0.091-0.32,0.096-0.492   c0.001-0.025,0.003-0.049,0.002-0.075c0-0.025,0.004-0.048,0.002-0.073l-0.315-4.507l11.298-6.269l2.622,2.623l-6.269,11.298   l-4.507-0.316c-0.025-0.002-0.05,0.003-0.075,0.002c-0.023,0-0.045,0.001-0.068,0.002c-0.172,0.004-0.339,0.036-0.494,0.096   c-0.022,0.008-0.042,0.019-0.064,0.029c-0.159,0.07-0.303,0.165-0.429,0.285c-0.009,0.009-0.021,0.011-0.03,0.02L51.724,50.386   l-2.104-2.104L77.612,20.29z M31.093,37.727c-0.411-0.428-1.054-0.59-1.637-0.352c-5.698,2.312-12.192,1-16.539-3.347   c-3.472-3.473-5.011-8.295-4.293-13.038l5.196,5.197c1.28,1.279,2.96,1.919,4.64,1.919c1.677,0,3.354-0.638,4.63-1.914l3.555-3.555   c1.238-1.238,1.919-2.883,1.918-4.634c-0.001-1.75-0.684-3.397-1.924-4.636l-5.199-5.199c4.741-0.722,9.562,0.818,13.041,4.295   c4.282,4.282,5.612,10.643,3.437,16.277l-1.562,1.572c-0.581,0.584-0.577,1.529,0.007,2.11c0.291,0.29,0.672,0.434,1.052,0.434   c0.384,0,0.767-0.147,1.059-0.441l0.739-0.743c1.872,1.872,6.078,6.078,11.397,11.397l-3.108,3.108   c-0.806-0.771-1.855-1.202-2.973-1.202c-1.152,0-2.235,0.449-3.049,1.263l-0.938,0.938L31.093,37.727z M15.31,87.983l-3.287-3.288   l22.819-22.819c0.878-0.878,2.41-0.878,3.288,0c0.907,0.906,0.907,2.38,0,3.287L15.31,87.983z M48.385,64.897L21.947,91.336   c-0.876,0.876-2.408,0.876-3.284,0l-1.242-1.242l22.82-22.82c2.071-2.07,2.071-5.438,0-7.508c-1.003-1.003-2.336-1.556-3.754-1.556   c-1.419,0-2.752,0.552-3.754,1.556L9.913,82.585l-1.242-1.242c-0.438-0.439-0.68-1.022-0.68-1.642c0-0.62,0.242-1.203,0.68-1.642   l26.438-26.439c0.438-0.438,1.021-0.68,1.641-0.68c0.621,0,1.204,0.241,1.642,0.68l9.993,9.993c0.438,0.438,0.68,1.021,0.68,1.641   C49.065,63.875,48.823,64.458,48.385,64.897z M51.656,56.414l-2.124,2.124l-8.065-8.064l2.125-2.124c0.501-0.5,1.374-0.501,1.876,0   l0.978,0.978c0.003,0.003,0.004,0.008,0.008,0.012l4.214,4.214c0.003,0.003,0.008,0.004,0.012,0.008l0.977,0.978   C52.172,55.056,52.172,55.897,51.656,56.414z M90.538,90.095c-1.961,1.952-5.144,1.953-7.095,0.002L52.828,59.463l0.938-0.938   c1.658-1.658,1.673-4.336,0.061-6.022l3.108-3.108c11.381,11.39,25.113,25.121,32.626,32.635l0.975,0.976   C91.48,83.948,92,85.209,92,86.556C92,87.896,91.48,89.153,90.538,90.095z" />
        </svg>
        Build Form
      </BuildButotn>

      <SettingButton
        className="App-setting"
        onClick={() => toggleSetting(!showSetting)}
        style={{ cursor: 'pointer' }}
        ref={settingButton}
      >
        <svg viewBox="0 0 100 110">
          <g>
            <path
              fill="none"
              d="M50.002,28.61c-0.005,0-0.009,0-0.013,0c-5.715,0.004-11.086,2.232-15.123,6.274    c-4.036,4.042-6.257,9.415-6.252,15.128c0.003,5.715,2.23,11.086,6.272,15.123C38.924,69.169,44.291,71.39,50,71.39    c0.006,0,0.011,0,0.017,0c11.791-0.008,21.38-9.611,21.374-21.408c0-5.712-2.228-11.08-6.273-15.118    C61.077,30.83,55.709,28.61,50.002,28.61z"
            />
            <path
              fill="none"
              d="M89.131,44.115c0,0-0.001,0-0.002,0l-3.63,0.003c0,0,0,0-0.001,0c-0.688,0-1.282-0.484-1.422-1.159    c-0.894-4.333-2.589-8.408-5.036-12.11c-0.381-0.576-0.304-1.339,0.184-1.827l2.574-2.573c1.15-1.157,1.147-3.04-0.011-4.196    l-4.085-4.084c-0.557-0.554-1.302-0.86-2.098-0.86c0,0-0.001,0-0.002,0c-0.793,0-1.533,0.305-2.083,0.86l-2.583,2.581    c-0.487,0.486-1.25,0.564-1.825,0.184c-3.714-2.449-7.792-4.139-12.122-5.023c-0.676-0.138-1.161-0.732-1.161-1.422v-3.628    c0-1.63-1.33-2.957-2.965-2.958h-5.778c-1.633,0.002-2.963,1.333-2.963,2.967v3.63c0,0.688-0.483,1.282-1.157,1.421    c-4.335,0.897-8.413,2.593-12.119,5.042c-0.576,0.38-1.342,0.301-1.828-0.187l-2.568-2.578c-1.156-1.147-3.037-1.145-4.188,0.01    L18.167,22.3c-0.555,0.556-0.86,1.299-0.859,2.093c0.001,0.795,0.31,1.538,0.868,2.093l2.577,2.575    c0.488,0.487,0.565,1.25,0.185,1.826c-2.441,3.7-4.131,7.777-5.025,12.12c-0.139,0.675-0.733,1.159-1.421,1.159l-3.624,0.001    c-1.634,0.002-2.964,1.333-2.964,2.968l0.006,5.781c0.004,1.633,1.332,2.962,2.96,2.962c0,0,0.001,0,0.002,0l3.632,0.002    c0.688,0,1.281,0.483,1.42,1.157c0.898,4.329,2.595,8.404,5.043,12.112c0.38,0.575,0.303,1.338-0.185,1.826l-2.573,2.573    c-1.153,1.156-1.15,3.036,0.006,4.193l4.09,4.085c1.157,1.153,3.039,1.153,4.193-0.002l2.572-2.577    c0.28-0.282,0.653-0.426,1.028-0.426c0.276,0,0.554,0.078,0.799,0.24c3.719,2.452,7.795,4.143,12.117,5.025    c0.676,0.138,1.161,0.732,1.161,1.422v3.624c0.004,1.631,1.333,2.962,2.964,2.963l5.783-0.003c0.79,0,1.535-0.312,2.098-0.876    c0.561-0.562,0.869-1.303,0.867-2.087c0-0.002,0-0.003,0-0.004v-3.631c0-0.689,0.484-1.282,1.158-1.421    c4.326-0.893,8.401-2.589,12.113-5.041c0.575-0.38,1.341-0.301,1.828,0.186l2.568,2.575c1.157,1.147,3.042,1.145,4.197-0.007    l4.082-4.093c0.559-0.559,0.865-1.303,0.864-2.099c-0.001-0.793-0.308-1.534-0.864-2.086l-2.578-2.578    c-0.487-0.487-0.564-1.249-0.186-1.824c2.444-3.715,4.136-7.794,5.026-12.121c0.139-0.675,0.733-1.159,1.422-1.159h3.624    c1.63-0.002,2.958-1.333,2.958-2.967v-5.788c0-0.784-0.31-1.526-0.874-2.088C90.659,44.424,89.917,44.115,89.131,44.115z     M50.018,74.293c-0.006,0-0.013,0-0.019,0c-6.484,0-12.578-2.522-17.165-7.104c-4.59-4.585-7.12-10.686-7.123-17.176    c-0.006-6.488,2.516-12.59,7.101-17.181c4.584-4.59,10.684-7.121,17.175-7.126c0.005,0,0.01,0,0.015,0    c6.482,0,12.577,2.522,17.167,7.103c4.595,4.586,7.125,10.685,7.125,17.172C74.3,63.377,63.41,74.283,50.018,74.293z"
            />
            <path d="M93.272,42.93c-1.111-1.109-2.582-1.718-4.142-1.718c-0.001,0-0.003,0-0.004,0l-2.466,0.002    c-0.928-3.881-2.458-7.56-4.559-10.964l1.752-1.751c2.28-2.293,2.273-6.016-0.015-8.3l-4.087-4.085    c-1.107-1.101-2.58-1.708-4.148-1.708c-0.001,0-0.002,0-0.003,0c-1.571,0.001-3.042,0.611-4.137,1.712l-1.756,1.754    c-3.414-2.102-7.096-3.629-10.977-4.55v-2.462c0-3.229-2.632-5.858-5.867-5.861h-5.78c-3.234,0.004-5.865,2.637-5.865,5.87v2.467    c-3.883,0.931-7.563,2.462-10.97,4.563l-1.749-1.756c-2.294-2.279-6.015-2.272-8.294,0.014l-4.091,4.09    c-1.105,1.107-1.712,2.58-1.709,4.151c0.003,1.572,0.615,3.044,1.721,4.144l1.75,1.749c-2.096,3.402-3.622,7.084-4.55,10.972    l-2.461,0.001C7.631,41.269,5,43.902,5,47.138l0.006,5.785c0.008,3.232,2.637,5.859,5.861,5.859c0.001,0,0.003,0,0.004,0    l2.468,0.001c0.932,3.879,2.463,7.557,4.565,10.964l-1.75,1.75c-2.283,2.289-2.279,6.012,0.008,8.299l4.092,4.087    c2.29,2.281,6.012,2.279,8.297-0.006l1.749-1.752c3.416,2.104,7.097,3.631,10.971,4.55v2.462c0.008,3.231,2.639,5.861,5.867,5.862    l5.784-0.003c1.566-0.001,3.041-0.614,4.152-1.729c1.109-1.112,1.718-2.584,1.714-4.144V86.66    c3.875-0.927,7.554-2.458,10.965-4.562l1.748,1.753c2.293,2.276,6.015,2.27,8.301-0.009l4.082-4.093    c1.108-1.107,1.716-2.583,1.713-4.156c-0.002-1.571-0.614-3.042-1.718-4.137l-1.751-1.751c2.099-3.414,3.625-7.094,4.55-10.971    h2.462C92.372,58.729,95,56.095,95,52.862v-5.788C95,45.512,94.387,44.04,93.272,42.93z M92.097,52.862    c0,1.634-1.327,2.966-2.958,2.967h-3.624c-0.689,0-1.283,0.484-1.422,1.159c-0.89,4.327-2.581,8.406-5.026,12.121    c-0.378,0.575-0.301,1.337,0.186,1.824l2.578,2.578c0.556,0.552,0.863,1.293,0.864,2.086c0.001,0.796-0.305,1.54-0.864,2.099    l-4.082,4.093c-1.156,1.152-3.041,1.154-4.197,0.007l-2.568-2.575c-0.487-0.488-1.253-0.566-1.828-0.186    c-3.712,2.452-7.787,4.148-12.113,5.041c-0.674,0.139-1.158,0.732-1.158,1.421v3.631c0,0.001,0,0.002,0,0.004    c0.002,0.783-0.306,1.524-0.867,2.087c-0.563,0.564-1.308,0.876-2.098,0.876l-5.783,0.003c-1.63-0.001-2.96-1.332-2.964-2.963    V85.51c0-0.69-0.485-1.284-1.161-1.422c-4.321-0.882-8.398-2.572-12.117-5.025c-0.244-0.162-0.522-0.24-0.799-0.24    c-0.375,0-0.748,0.145-1.028,0.426l-2.572,2.577c-1.153,1.155-3.036,1.155-4.193,0.002l-4.09-4.085    c-1.156-1.157-1.159-3.037-0.006-4.193l2.573-2.573c0.488-0.488,0.565-1.251,0.185-1.826c-2.448-3.707-4.145-7.783-5.043-12.112    c-0.14-0.674-0.733-1.157-1.42-1.157l-3.632-0.002c-0.001,0-0.002,0-0.002,0c-1.628,0-2.956-1.329-2.96-2.962l-0.006-5.781    c0-1.635,1.33-2.967,2.964-2.968l3.624-0.001c0.688,0,1.282-0.484,1.421-1.159c0.894-4.343,2.585-8.42,5.025-12.12    c0.38-0.576,0.302-1.339-0.185-1.826l-2.577-2.575c-0.559-0.556-0.867-1.299-0.868-2.093c-0.001-0.794,0.304-1.538,0.859-2.093    l4.093-4.092c1.151-1.156,3.032-1.158,4.188-0.01l2.568,2.578c0.487,0.489,1.252,0.567,1.828,0.187    c3.707-2.449,7.784-4.145,12.119-5.042c0.674-0.139,1.157-0.733,1.157-1.421v-3.63c0-1.634,1.33-2.965,2.963-2.967h5.778    c1.634,0.001,2.965,1.328,2.965,2.958v3.628c0,0.69,0.485,1.284,1.161,1.422c4.33,0.884,8.408,2.574,12.122,5.023    c0.575,0.38,1.338,0.301,1.825-0.184l2.583-2.581c0.55-0.555,1.29-0.86,2.083-0.86c0.001,0,0.001,0,0.002,0    c0.795,0,1.541,0.306,2.098,0.86l4.085,4.084c1.158,1.156,1.161,3.039,0.011,4.196l-2.574,2.573    c-0.488,0.488-0.565,1.251-0.184,1.827c2.448,3.702,4.142,7.777,5.036,12.11c0.139,0.675,0.733,1.159,1.422,1.159    c0,0,0.001,0,0.001,0l3.63-0.003c0.001,0,0.002,0,0.002,0c0.786,0,1.529,0.309,2.092,0.871c0.564,0.561,0.874,1.303,0.874,2.088    V52.862z" />
            <path d="M50.002,25.706c-0.005,0-0.01,0-0.015,0c-6.491,0.005-12.591,2.536-17.175,7.126c-4.585,4.591-7.106,10.693-7.101,17.181    c0.003,6.49,2.533,12.59,7.123,17.176C37.421,71.77,43.516,74.293,50,74.293c0.006,0,0.013,0,0.019,0    C63.41,74.283,74.3,63.377,74.294,49.981c0-6.487-2.53-12.585-7.125-17.172C62.579,28.229,56.484,25.706,50.002,25.706z     M50.017,71.39c-0.006,0-0.011,0-0.017,0c-5.709,0-11.076-2.221-15.113-6.255c-4.042-4.037-6.269-9.408-6.272-15.123    c-0.005-5.713,2.215-11.086,6.252-15.128c4.037-4.042,9.408-6.27,15.123-6.274c0.004,0,0.009,0,0.013,0    c5.707,0,11.075,2.221,15.115,6.254c4.045,4.038,6.273,9.406,6.273,15.118C71.396,61.778,61.808,71.382,50.017,71.39z" />
          </g>
        </svg>
        Setting
      </SettingButton>
    </>
  );
}

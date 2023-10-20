import styled from "styled-components";

export const StyledDiv = styled.div`
  :root {
    --purple: #603f8b;
    --aqua: #b4fee7;
    --violet: #a16ae8;
    --fuchsia: #fd49a0;
    --white: #efefef;
    --black: #222;
    --trueBlack: #000;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--black);
  }

  .card_image {
    display: flex;
    height: 250px;
    box-shadow: 0 50px 100px 0 var(--violet);
  }

  .card_image img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background-color: #efefef !important;
    border-radius:10px;
    transition: transform 0.1s linear, box-shadow 0.2s;
  }

  .card_text:focus,
  .card:focus {
    outline: 2px dashed var(--aqua);
  }

  .card:focus,
  .card:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.2);
  }

  .card_content {
    padding: 0.5rem 1rem 1rem;
    color: var(--white);
  }

  .card_title {
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
    height: auto;
    color: var(--black);
    padding: 0.5rem;
    border-radius: 5px 0 0 5px;
    transform: rotate(-3.3deg);
    transform-origin: left top;
    font-family: Georgia, Times, serif;
    font-weight: 600;
    font-size: 1.325rem;
    postition: relative;
    overflow: hidden;
    z-index: 1;
    background-color: rgba(253, 73, 160, 0.75);
    animation: 0s 0s fly-in 0 reverse both;
  }

  @media (min-width: 535px) {
    .card_title {
      animation: 0.5s 0.25s fly-out 1 both;
    }
  }

  .card:focus .card_title,
  .card:hover .card_title {
    animation: 0.5s ease-in 0s fly-in 1 both;
  }

  .card_text {
    font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica,
      Helvetica Neue, Arial, sans-serif;
    line-height: 1.5;
    text-size-adjust: 0.2px;
    padding: 0 1rem;
  }

  .card_text p:first-of-type:first-letter {
    font-size: 1.8em;
    font-family: Georgia, Times, serif;
    margin-right: 0.05em;
  }

  @media (min-width: 480px) {
    .card_text {
      overflow: auto;
      max-height: 20rem;
      scrollbar-width: thin;
      scrollbar-color: var(--aqua) var(--violet);
    }

    .card_text::-webkit-scrollbar {
      width: 12px;
    }

    .card_text::-webkit-scrollbar-track {
      background: var(--violet);
    }

    .card_text::-webkit-scrollbar-thumb {
      background-color: var(--aqua);
    }
  }

  .card_text strong {
    color: var(--aqua);
  }

  .upcharge {
    position: relative;
    font-weight: 600;
    background-color: var(--violet);
    padding: 0.5rem 0.75rem;
    color: var(--trueBlack);
    border-radius: 10px;
    z-index: 0;
    overflow: hidden;
  }

  .upcharge::after,
  .upcharge::before {
    content: "+";
    display: block;
    line-height: 0;
    font-size: 3rem;
    position: absolute;
    color: var(--purple);
    z-index: -1;
    opacity: 0.3;
  }

  .upcharge::before {
    left: 0;
    top: 0.5rem;
  }

  .upcharge::after {
    right: 0;
    bottom: 1.25rem;
  }

  .note {
    display: block;
    text-align: center;
    padding: 0.5rem;
    font-weight: 900;
    
    color: var(--black);
    font-size: 1.3em;
    font-style: italic;
    margin-top 5px
  }

  @keyframes fly-in {
    0% {
      top: 0;
      right: 0;
      font-size: 1.325rem;
    }

    25% {
      top: 0;
      right: -200%;
      font-size: 1.325rem;
    }

    26% {
      font-size: 2rem;
    }

    100% {
      top: 2rem;
      right: 0;
      font-size: 2rem;
    }
  }

  @keyframes fly-out {
    0% {
      top: 2rem;
      right: 0;
      font-size: 2rem;
    }

    50% {
      top: 0;
      right: -200%;
      font-size: 1.325rem;
    }

    100% {
      top: 0;
      right: 0;
      font-size: 1.325rem;
    }
  }
`;
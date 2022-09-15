import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
    list-style: none;
	}

  :root{
		--white: #ffffff;
		--black: #1f1f1f;
		--grey: #808080;
		--orange: #f27300;
		--pacifico: 'Pacifico', cursive;
		--openSans: 'Open Sans', sans-serif;
		--transition: 'all 650ms ease-in-out'
	}
  
  html {
		scroll-behavior: smooth;
	}

	body {
		background-color: var(--background);
		color: var(--white);
		font-family: 'Open Sans', sans-serif;
	}

	span {
		color: var(--primary);
	}

	button {
		cursor: pointer;

		&:hover {
			border-color: var(--secundary);
			color: var(--secundary);

			& a {
				color: var(--secundary);
			}
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: all 250ms ease-in-out;

		&:hover{
			color: var(--secundary);
		}
	}
`;

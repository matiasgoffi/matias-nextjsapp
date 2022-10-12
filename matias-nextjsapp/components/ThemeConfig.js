import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`

  
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .li-nav{
    list-style: none;
    padding: 1rem ;
    width: 40%;
    justify-content: center;
    margin: 0.2rem;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
    border-bottom: 0.2px solid ;
    border-radius: 5%; 
    height: 20px;
  
  }
  
@-webkit-keyframes shadow-drop-2-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0  #33c68baa;
            box-shadow: 0 0 0 0  #33c68baa;
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    -webkit-box-shadow: 0 0 20px 0px  #33c68baa;
            box-shadow: 0 0 20px 0px  #33c68baa;
  }
}
@keyframes shadow-drop-2-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0  #33c68baa;
            box-shadow: 0 0 0 0  #33c68baa;
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    -webkit-box-shadow: 0 0 20px 0px  #33c68baa;
            box-shadow: 0 0 20px 0px  #33c68baa;
  }
}

  .li-nav:hover {
    -webkit-animation: shadow-drop-2-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: shadow-drop-2-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
@media only screen and (max-width: 417px){
  .li-nav{
    width: 60%;
  }
}
@media only screen and (max-width: 600px){
    .image-nav {
              position: relative;
              top: 0px !important;
              bottom: 0px !important;
            }
  
}

.button-theme {
  margin: 0.2rem;
  border-radius: 3px;
  padding: 0.2rem;
  background-color: #33c68baa; 
}
a {
  color: #2bb6dc;
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.portfolio-title{
  padding-left: 2rem;
  padding-bottom: 2rem;
  -webkit-animation: tracking-in-expand 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
            animation: tracking-in-expand 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(50);
            transform: translateY(50);
  }
  100% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
  }
}


.portfolio-card  {
	-webkit-animation: slide-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.sidenav {
  height: 20%;
  width: 17vw;
  position: fixed;
  z-index: 100;
  top: 60;
  right: 0;
  margin-top: 0.4rem;
  background-color:#33c68baa;
  overflow-x: hidden;
  transition: 0.7s;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.sidenav a {
  padding: 0.8rem 0.8rem;
  text-decoration: none;
  font-size: 25px;
  color: #363537;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}
@media only screen and (min-width: 400px) and (max-width: 712px){
  .sidenav {
    width: 10vw;
    height: 20%;
}
.sidenav a {
  padding: 0.5rem 0.5rem;
}
}
@media only screen and (min-width: 712px) and (max-width: 800px){
  .sidenav {
    width: 5vw;
    height: 24%;
}
.sidenav a {
  padding: 0.4rem 0.4rem;
}
}
@media only screen and (min-width: 800px) and (max-width: 1024px){
  .sidenav {
      width: 5vw;
      height: 24%;
  }
  .sidenav a {
    padding: 0.4rem 0.4rem;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1300px){
  .sidenav {
      width: 5vw;
      height: 20%;
  }
  .sidenav a {
    padding: 1.1rem 1.1rem;
  }
}
@media only screen and (min-width: 1300px){
  .sidenav {
      width: 5vw;
      height: 20%;
  }
  .sidenav a {
    padding: 1.1rem 1.1rem;
  }
}
  


`
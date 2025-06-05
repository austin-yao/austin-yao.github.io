import { useState } from 'react'
import './styles/App.css'
import Header from './components/header.jsx'
import { motion } from "framer-motion";

const App = () => {
  const text = "Hi, I'm Austin Yao.".split(" ");
  return (
    <div>
      <Header />
      <div className="parent">
        <div className="left">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i == 0 ? i / 5 : i / 4 + 1
              }}
              key={i}
            >
              <h1>{el}&nbsp;</h1>
            </motion.span>
          ))}
        </div>
        <div className="right">
          <img className="circle-image" src='/me.jpg' alt='Circuluar' />
        </div>
      </div>
      <div className="intro">
        <div>
          <p>I'm a senior at <a href='https://www.seas.upenn.edu/'>Penn</a> pursuing my B.S.E/M.S in CS and am originally from <a href='https://en.wikipedia.org/wiki/Cary,_North_Carolina'>Cary, NC</a>.
            In the past, I've worked on tech at Morgan Stanley, TAed <a href='https://www.cis.upenn.edu/~cis1210/current/index.html'>CIS 1210</a> and <a href='https://www.cis.upenn.edu/~cis1600/current/'>CIS 1600</a>, and contributed to research projects on protocol design and Ethereum's space efficiency.</p>
          <p>In my spare time, I enjoy listening to <a href='https://open.spotify.com/user/swaggerking11?si=852710a5c6844d8d'>music</a>, supporting my fantasy football <a href='https://x.com/austinyao_/status/1595253639907610624'>team</a>, and going on random walks both online and in the literal sense. Very occasionally, I'll find the impetus to ground and decode some of my thoughts into writing, which I'll share here.</p>
          <p>Feel free to reach out!</p>
        </div>
      </div>
      <div className="footer">
        <a href="mailto:austin.y.yao@gmail.com">Email</a>&nbsp;-&nbsp;
        <a href='https://www.linkedin.com/in/ayyao/'>LinkedIn</a>&nbsp;-&nbsp;
        <a href='https://github.com/austin-yao'>Github</a>&nbsp;-&nbsp;
        <a href='/AustinYao_Resume.pdf' download='AustinYao_Resume.pdf'>Resume</a>&nbsp;-&nbsp;
        <a href='https://twitter.com/austinyao_'>Twitter</a>&nbsp;-&nbsp;
        <a href='https://vsco.co/austinyao/gallery'>Photos</a>
      </div>
    </div>
  );
};

export default App

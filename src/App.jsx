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
                delay: i === 0 ? i / 5 : i / 4 + 1
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
          <p>I'm based in the Bay Area and currently work at <a href='https://www.aven.com/'>Aven</a>. I'm originally from <a href='https://en.wikipedia.org/wiki/Cary,_North_Carolina'>Cary, NC</a> and studied Computer Science at <a href='https://www.thedp.com/article/2025/12/penn-alumni-news-controversies-2025-trump-mangione-luigi-musk-charlie-javice'>Penn</a>. Previously, I have worked on tech at Morgan Stanley, TAed <a href='https://www.cis.upenn.edu/~cis1600/current/'>CIS 1600</a> at Penn, and contributed to research in the Crypto space.</p>
          <p>My interests broadly lie in Applied AI, start-ups, random walks, football, and on occasions, decoding my thoughts into writing, which I will share here.</p>
          <p>Always happy to chat. Feel free to reach out.</p>
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

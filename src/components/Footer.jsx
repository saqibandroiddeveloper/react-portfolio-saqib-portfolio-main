
import {AiFillGithub,AiFillLinkedin,AiOutlineArrowUp,} from "react-icons/ai";
import me from "../assets/saqib-ft.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Saqib Khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/muhammad-saqib-khan-b79649245/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/saqibandroiddeveloper" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>M. Khotibul Umam</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Fresh Graduate Information System</HighlightAlt> based in Surabaya,
        Indonesia.
      </p>
      <p>
        I am passionate about data science and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;

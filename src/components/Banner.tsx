import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import leaves1 from "../assets/images/leaves1.png";
import leaves2 from "../assets/images/leaves2.png";
import leaves3 from "../assets/images/leaves3.png";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Teaching Fellow", "UX Designer", "Data Analyst", "Artist"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <div className="leaves">
        <div className="set">
          <div>
            <img src={leaves1} alt="leaves1" />
          </div>
          <div>
            <img src={leaves2} alt="leaves2" />
          </div>
          <div>
            <img src={leaves3} alt="leaves3" />
          </div>
          <div>
            <img src={leaves2} alt="leaves2" />
          </div>
          <div>
            <img src={leaves3} alt="leaves3" />
          </div>
          <div>
            <img src={leaves1} alt="leaves1" />
          </div>
        </div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={9} xl={7}>
            <h2>
              |<span className="wrap">{text}</span>
            </h2>
            <h1>
              {`Erjill De Vera`}
              <br />
            </h1>
            <p>
              I'm Erjill, A Data Scientist and UX Designer with a passion for
              creating meaningful experiences - shaped by 3.5 years teaching in
              Higher Education.
            </p>
            <button className="button">
              <span>Let's connect </span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

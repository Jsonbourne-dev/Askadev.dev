import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import AsciiArtComponent from '../components/AsciiArt.jsx'; 
import Background from '../components/Background.jsx';
import inclusivity from '../assets/inclusivity.svg';
import transparency from '../assets/transparency.svg';
import clarity from '../assets/clarity.svg';
import { Theme, Container, ArrowPX, Text, Button } from '../styled-components';
import Footer from '../components/Footer.jsx';

const Developer = () => {
  const [titleWidth, setTitleWidth] = useState(0);
  const [whyChooseWidth, setWhyChooseWidth] = useState(0);
  const [seamlessTransactionsWidth, setSeamlessTransactionsWidth] = useState(0);
  const [supportWidth, setSupportWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const titleRef = useRef(null);
  const whyChooseRef = useRef(null);
  const seamlessTransactionsRef = useRef(null);
  const supportRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const updateWidths = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
      if (whyChooseRef.current) setWhyChooseWidth(whyChooseRef.current.offsetWidth);
      if (seamlessTransactionsRef.current) setSeamlessTransactionsWidth(seamlessTransactionsRef.current.offsetWidth);
      if (supportRef.current) setSupportWidth(supportRef.current.offsetWidth);
      if (imageRef.current) setImageHeight(imageRef.current.offsetHeight);
    };

    updateWidths();

    window.addEventListener('resize', updateWidths);

    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ width: '100%', paddingBottom: '20px', position: 'relative', zIndex: 10 }}>
            <AppBar width="100%" />
          </div>

          <Container
            width="100%"
            padding="20px"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            color="#FFFFFF"
            display="flex"
            justifyContent="center"
            alignItems="center"
            hasBorder={false} // No border
            style={{ position: 'relative' }}
          >
            <Container
              maxWidth="800px"
              width="100%"
              padding="20px"
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              textAlign="left"
              hasBorder={false} // No border
            >
              <div>
                <Text
                  variant="subtitle"
                  fontSize="2rem"
                  color="#FFFF00"
                  textAlign="left"
                  margin="0"
                  padding="0"
                  lineHeight="2.8rem" 
                >
                  Developer to AskaDEV! 🚀
                </Text>
                <Text
                  variant="body"
                  fontSize="1.2rem" 
                  color="#FFFF00"
                  textAlign="left"
                  margin="0"
                  padding="10px 0 0 0"
                  lineHeight="1.8rem" 
                >
                  We are here to help you with all your programming needs. We are the <strong>(911)</strong> of code!💻✨
                </Text>
              </div>
            </Container>

            <div className="ascii-border"></div>
          </Container>

          <Container
            width="100%"
            height="auto"
            maxWidth="1400px"
            padding="0"
            backgroundColor="transparent"
            color="transparent"
            margin="0 auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            hasBorder={false} // No border
          >
            <Container
              width="100%"
              padding="20px"
              margin="100px 0"
              display="flex"
              justifyContent="center"
              alignItems="center"
              hasBorder={false} // No border
            >
              <div style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                <AsciiArtComponent />
              </div>
            </Container>

            <Container
              width="100%"
              maxWidth="1400px"
              padding="20px"
              margin="0 auto"
              backgroundColor="var(--background-color)"
              color="var(--primary-color)"
              display="flex"
              flexDirection="column"
              alignItems="center"
              hasBorder={false} // No border
            >
              <div style={{ marginTop: '80px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <div style={{ marginBottom: '40px' }}>
                  <Text
                    variant="title"
                    fontSize="2rem"
                    color="#FFFF00"
                    fontWeight="bold"
                    textAlign="center"
                    margin="0"
                    padding="0"
                    lineHeight="2.8rem"
                  >
                    Wanna help developers? 🤔💻🚀
                  </Text>
                </div>

                <div className="info-box">
                  <img src={inclusivity} alt="Inclusivity" className="info-box-logo" />
                  <div className="info-box-content">
                    <Text variant="title" fontSize="1.5rem" color="#FFFF00" className="centered-title">
                      Inclusivity
                    </Text>
                    <Text variant="body" fontSize="1rem" color="var(--primary-color)" style={{ lineHeight: '1.6' }} className="left-aligned-text">
                      Anyone with the capacity to contribute: can. We are proactive in welcoming a diverse contributor base for our code, documentation, developer relations, education, and communication efforts. Bad actors will be met with a published governance model and enforced code of conduct. Our users deserve representation in our development communities, and we promote varied perspectives and respectful debate.
                    </Text>
                  </div>
                </div>

                <div className="info-box">
                  <img src={transparency} alt="Transparency" className="info-box-logo" />
                  <div className="info-box-content">
                    <Text variant="title" fontSize="1.5rem" color="#FFFF00" className="centered-title">
                      Transparency
                    </Text>
                    <Text variant="body" fontSize="1rem" color="var(--primary-color)" style={{ lineHeight: '1.6' }} className="left-aligned-text">
                      Decision-making is open by default, with rare exceptions made for security, compliance, personnel, or other sensitive issues. Projects under AskaDEV stewardship will conduct design, roadmap, issues, bugs, and code reviews in public. This is critical for accountability and to promote the inclusive environment necessary for project success.
                    </Text>
                  </div>
                </div>

                <div className="info-box">
                  <img src={clarity} alt="Clarity" className="info-box-logo" />
                  <div className="info-box-content">
                    <Text variant="title" fontSize="1.5rem" color="#FFFF00" className="centered-title">
                      Clarity
                    </Text>
                    <Text variant="body" fontSize="1rem" color="var(--primary-color)" style={{ lineHeight: '1.6' }} className="left-aligned-text">
                      Projects need well-defined scope to succeed. They also need accessible, comprehensive documentation, a stellar Getting Started experience, and well-defined expectations. AskaDEV fosters an environment built for contribution without personal intervention. Newcomers should be able to follow the project status on their own without additional explanation.
                    </Text>
                  </div>
                </div>
              </div>
            </Container>
          </Container>

          <Footer style={{ marginTop: 'auto' }} />
        </div>
      </Theme>

      <style>{`
        .ascii-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          font-family: 'Courier New', Courier, monospace;
          color: #00FFFF; 
          white-space: pre;
          text-align: center;
          line-height: 1;
          z-index: 1;
          font-size: 10px; 
        }

        .ascii-border::before {
          content: "${'░'.repeat(150)}"; 
          display: block;
        }

        .info-box {
          width: 100%;
          max-width: 1000px;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          border: 2px solid #FFFF00;
          border-radius: 8px;
          padding: 20px;
        }

        .info-box-logo {
          width: 80px;
          height: auto;
          margin-right: 20px;
        }

        .info-box-content {
          flex: 1;
          border-left: 2px solid #FFFF00;
          padding-left: 20px;
        }

        .centered-title {
          text-align: left;
        }

        .left-aligned-text {
          text-align: left;
        }

        @media (max-width: 1000px) {
          .info-box {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
          }

          .info-box-logo {
            margin-right: 0;
            margin-bottom: 10px;
          }

          .info-box-content {
            border-left: none;
            padding-left: 0;
            border-top: 2px solid #FFFF00;
            padding-top: 10px;
          }

          .centered-title {
            text-align: center;
          }

          .left-aligned-text {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default Developer;

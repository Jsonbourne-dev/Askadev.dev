import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import Footer from '../components/Footer.jsx';
import { Theme } from '../styled-components';
import styled from 'styled-components';
import { Container } from '../styled-components';

const DocsPage = () => {
  const [openedDocs, setOpenedDocs] = useState([]);
  const [selectedSubDoc, setSelectedSubDoc] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const docs = [
    {
      title: 'AskaDEV',
      content: `AskaDEV is an innovative platform designed to facilitate the development of various applications and tools. 
        It aims to streamline the development process, offering a range of features that make coding more efficient and enjoyable.`,
      subDocs: [
        { title: 'Welcome', content: 'Welcome to AskaDEV, your go-to platform for developing amazing projects!' },
        { title: 'Getting Started', content: 'How to get started with AskaDEV...' },
        { title: 'Help Develop', content: 'Contribute to the development of AskaDEV and join our community of developers!' },
      ],
    },
    {
      title: 'Terminal',
      content: `The terminal is a powerful tool that allows users to interact with their computer's operating system through command-line interface (CLI). 
        It provides a way to execute commands, navigate files and directories, and perform various tasks efficiently.`,
      subDocs: [
        { title: 'Getting Started', content: 'How to start using the terminal effectively...' },
        { title: 'Basic Commands', content: 'Common commands to get started...' },
        { title: 'Advanced Usage', content: 'Explore advanced terminal commands and their applications...' },
      ],
    },
    {
      title: 'Web5',
      content: `Web5 represents the next evolution of the web, focusing on decentralized applications and services.`,
      subDocs: [
        { title: 'What is Web5', content: 'Web5 is a decentralized web platform that aims to revolutionize online interactions...' },
        { title: 'Web5 Features', content: 'Web5 includes features such as enhanced security, user control, and decentralized storage...' },
        { title: 'Web5 Use Cases', content: 'Examples of Web5 in action include decentralized finance, social networking, and identity verification...' },
      ],
    },
  ];

  const handleDocChange = (doc) => {
    setOpenedDocs((prev) => {
      if (prev.includes(doc.title)) {
        return prev.filter((title) => title !== doc.title);
      } else {
        return [...prev, doc.title];
      }
    });
    setSelectedSubDoc(null);
    setSelectedDoc(doc.title);
  };

  const handleSubDocChange = (subDoc) => {
    setSelectedSubDoc(subDoc);
  };

  const getSubDocHeight = (doc) => {
    if (openedDocs.includes(doc.title)) {
      return doc.subDocs.length * 40;
    }
    return 0; 
  };

  const selectedContent = selectedSubDoc || docs.find((doc) => openedDocs.includes(doc.title)) || {
    title: '',
    content: 'Select a document to view its content.',
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <MainContainer>
          <AppBar />
          <Container
            width="100%"
            height="calc(100vh - 60px)"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            margin="0 auto"
            display="flex"
            flexDirection="row"
            alignItems="stretch"
            justifyContent="flex-start"
            padding="0"
            style={{ overflow: 'hidden' }}
          >
            {isSidebarOpen && (
              <CustomSidebar>
                <ToggleButton onClick={toggleSidebar}>
                  Close Sidebar
                </ToggleButton>
                {docs.map((doc) => (
                  <div key={doc.title}>
                    <SidebarButton
                      onClick={() => handleDocChange(doc)}
                      isSelected={selectedDoc === doc.title}
                    >
                      {doc.title}
                      <ArrowContainer>
                        <Arrow 
                          isOpen={openedDocs.includes(doc.title)} 
                          isSelected={selectedDoc === doc.title}
                        >
                          {'>'}
                        </Arrow>
                      </ArrowContainer>
                    </SidebarButton>
                    <SubDocContainer height={getSubDocHeight(doc)} isOpen={openedDocs.includes(doc.title)}>
                      {openedDocs.includes(doc.title) && (
                        doc.subDocs.map((subDoc) => (
                          <SubDocItem
                            key={subDoc.title}
                            onClick={() => handleSubDocChange(subDoc)}
                            isSelected={selectedSubDoc && selectedSubDoc.title === subDoc.title}
                          >
                            {subDoc.title}
                          </SubDocItem>
                        ))
                      )}
                    </SubDocContainer>
                  </div>
                ))}
              </CustomSidebar>
            )}
            <ContentWrapper>
              {!isSidebarOpen && (
                <ToggleButton onClick={toggleSidebar}>
                  Open Docs
                </ToggleButton>
              )}
              <ContentSection>
                <ContentBox>
                  <Text variant="title" fontSize="2rem" margin="0 0 20px 0">
                    {selectedContent.title || 'Select a Document'}
                  </Text>
                  <Text margin="0">
                    {selectedContent.content}
                  </Text>
                </ContentBox>
              </ContentSection>
            </ContentWrapper>
          </Container>
        </MainContainer>
        <Footer />
      </Theme>
    </>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  font-family: 'Press Start 2P', cursive; 

  * { 
    font-family: 'Press Start 2P', cursive; 
  }
`;

const CustomSidebar = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  background-color: #000; 
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
  border-right: 4px solid #e1e100;
  overflow-y: auto; 
`;

const SidebarButton = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#e1e100' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#000' : '#e1e100')};
  padding: 10px;
  margin: 0;
  border: none;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #666; 
    color: #00ffff;
  }

  &:focus {
    outline: none;
  }
`;

const ArrowContainer = styled.span`
  display: flex;
  align-items: center;
  position: relative;
`;

const Arrow = styled.span`
  font-size: 16px;
  margin-left: 10px;
  font-family: 'Press Start 2P', cursive;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#e1e100')};
  transition: transform 0.5s, color 0.3s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(450deg)' : 'rotate(0deg)')};
  
  ${SidebarButton}:hover & {
    color: #00ffff; 
  }
`;

const SubDocContainer = styled.div`
  overflow: hidden; 
  height: ${({ height }) => `${height}px`}; 
  transition: height 0.3s ease;
  margin-left: 20px;
`;

const SubDocItem = styled.button`
  background: transparent;
  color: #e1e100;
  padding: 5px;
  border: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;

  &:hover {
    background-color: #666; 
    color: #00ffff;
  }

  &:focus {
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto; 
`;

const ContentSection = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

const Text = styled.p`
  color: #fff; 
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};

  @media (max-width: 600px) {
    font-size: 0.9rem; 
  }
`;

const ToggleButton = styled.button`
  background-color: #e1e100;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    background-color: #666;
    color: #00ffff;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    font-size: 14px; 
    padding: 8px 16px; 
  }
`;

const ContentBox = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

export default DocsPage;

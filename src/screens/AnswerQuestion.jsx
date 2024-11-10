import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addAnswerMessage } from '../redux/actions/questionsActions';
import AppBar from '../components/Topappbar';
import Footer from '../components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import AnsweredMessage from '../components/AnswerMessage';
import { InputField, Button, SpacerLine } from '../styled-components';

const theme = {
    fontSizes: {
        desktop: {
            xlarge: '36px',
            large: '20px',
            medium: '24px',
            small: '20px',
            xsmall: '14px',
            xxsmall: '7px',
        },
    },
    gaps: {
        desktop: {
            large: '20px',
            medium: '15px',
            small: '10px',
            xxsmall: '5px',
        },
    },
    fontWeights: {
        bold: '700',
        normal: '400',
        thick: '800',
        small: '200',
    },
    fonts: {
        thin: "'Roboto Thin', sans-serif",
        regular: "'Roboto', sans-serif",
        bold: "'Roboto Bold', sans-serif",
        extraBold: "'Roboto ExtraBold', sans-serif",
    },
    colors: {
        primary: '#BEE239',
        text: 'black',
        whiteText: 'white',
        spacerLine: '#b2b3b3',
        bottomSpacerLine: '#BEE239',
    },
};

const AnswerQuestion = () => {
    const { uuid } = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.questions);
    const questionData = questions.find((question) => question.uuid === uuid);

    const user = useSelector((state) => state.user);
    const isSignedIn = useSelector((state) => state.user.isSignedIn); // Access if user is signed in

    const [answer, setAnswer] = useState('');
    
    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleAnswerSubmit = async () => {
        // Check if the user is signed in before submitting the answer
        if (!isSignedIn) {
            // Redirect to signup page if not signed in
            window.location.href = '/#/signup';
            return;
        }

        // If the user is signed in, proceed with submitting the answer
        if (answer.trim() === '') return;

        dispatch(addAnswerMessage(uuid, user.username || "Anonymous", answer));

        const { _id, __v, ...questionDataToUpdate } = questionData;

        const updatedQuestion = {
            title: questionDataToUpdate.title || '', 
            subtitle: questionDataToUpdate.subtitle || '',
            username: questionDataToUpdate.username || 'Anonymous', 
            flags: Array.isArray(questionDataToUpdate.flags) ? questionDataToUpdate.flags : [],
            code: questionDataToUpdate.code || '',
            views: Number(questionDataToUpdate.views) || 0,
            votes: Number(questionDataToUpdate.votes) || 0,
            answers: [
                ...questionDataToUpdate.answers.map(ans => ({
                    answerMessage: ans.answerMessage || '',
                    user: ans.user || 'Anonymous',
                    uuid: ans.uuid || `${Date.now()}`,
                    votes: Number(ans.votes) || 0,
                })),
                {
                    answerMessage: answer,
                    user: user.username || 'Anonymous', 
                    uuid: `${Date.now()}`, 
                    votes: 0,
                },
            ],
            createdAt: questionDataToUpdate.createdAt || new Date(),
            uuid: questionDataToUpdate.uuid || `${Date.now()}`, 
        };

        try {
            const response = await axios.post('http://localhost:5000/api/updatequestions', updatedQuestion);
            console.log('Question updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating question:', error);
        }

        setAnswer(''); 
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.appContainer}>
                <AppBar />
                <QuestionContainer>
                    <ContentContainer>
                        {questionData ? (
                            <>
                                <h1 style={styles.title}>{questionData.title}</h1>
                                <div style={styles.stats}>
                                    <span style={{ fontWeight: theme.fontWeights.bold }}>Asked</span>
                                    <span style={{ ...styles.askedDate, fontWeight: theme.fontWeights.small }}>
                                        {new Date(questionData.createdAt).toLocaleDateString('en-US')}
                                    </span>
                                    <span style={styles.stat}>
                                        <span style={{ fontWeight: theme.fontWeights.thick }}>{questionData.votes || 0}</span>
                                        <span style={{ fontWeight: theme.fontWeights.small, marginLeft: '4px' }}>
                                            vote{(questionData.votes || 0) !== 1 ? 's' : ''}
                                        </span>
                                    </span>
                                    <span style={styles.stat}>
                                        <span style={{ fontWeight: theme.fontWeights.thick }}>{questionData.views}</span>
                                        <span style={{ fontWeight: theme.fontWeights.small, marginLeft: '4px' }}>
                                            view{questionData.views !== 1 ? 's' : ''}
                                        </span>
                                    </span>
                                    <span style={styles.stat}>
                                        <span style={{ fontWeight: theme.fontWeights.thick }}>{questionData.answers.length}</span>
                                        <span style={{ fontWeight: theme.fontWeights.small, marginLeft: '4px' }}>
                                            answer{questionData.answers.length !== 1 ? 's' : ''}
                                        </span>
                                    </span>
                                </div>

                                <SpacerLine fullWidth={true} />
                                <h2 style={styles.subtitle}>{questionData.subtitle}</h2>
                                <p style={styles.body}>{questionData.question}</p>
                                <SpacerLine fullWidth={true} />
                            </>
                        ) : (
                            <h1 style={styles.notFound}>Question not found</h1>
                        )}
                    </ContentContainer>
                </QuestionContainer>

                <BottomSpacerLine />

                <AnswersHeader>
                    <h1 style={styles.answersCount}>
                        {questionData?.answers?.length || 0} Answer{(questionData?.answers?.length !== 1) ? 's' : ''}
                    </h1>
                </AnswersHeader>
                <SpacerLine />

                {questionData?.answers?.length > 0 ? (
                    questionData.answers.map(answer => (
                        <AnsweredMessage
                            key={answer.uuid}
                            message={answer.answerMessage}
                            answer={answer}
                            user={answer.user}
                            votes={answer.votes}
                            setVotes={() => { }}
                        />
                    ))
                ) : (
                    null
                )}

                <Spacer />
                <Spacer />
                <InputContainer>
                    <InputField
                        placeholder="Answer question here"
                        value={answer}
                        onChange={handleAnswerChange}
                        width="100%"
                        height="100px"
                        title="Answer Question"
                        fontSize="20px"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight="700"
                        color="white"
                        titleDistance="50px"
                        titleFontSize="20px"
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button
                        variant="desktop-outlined"
                        onClick={handleAnswerSubmit}
                    >
                        Submit Answer
                    </Button>
                </ButtonContainer>
                <Spacer />
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </div>
        </ThemeProvider>
    );
};

const AnswersHeader = styled.div`
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    margin-top: 20px; 
`;

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden',
    },
    title: {
        fontSize: theme.fontSizes.desktop.xlarge,
        fontWeight: theme.fontWeights.bold,
        fontFamily: theme.fonts.extraBold,
        color: theme.colors.whiteText,
        marginBottom: theme.gaps.desktop.medium,
    },
    stats: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: theme.gaps.desktop.small,
        fontSize: theme.fontSizes.desktop.small,
        fontWeight: theme.fontWeights.bold,
        fontFamily: theme.fonts.regular,
        color: theme.colors.whiteText,
        marginBottom: theme.gaps.desktop.medium,
    },
    askedDate: {
        fontFamily: theme.fonts.regular,
    },
    subtitle: {
        fontSize: theme.fontSizes.desktop.large,
        fontWeight: theme.fontWeights.bold,
        fontFamily: theme.fonts.extraBold,
        color: theme.colors.whiteText,
    },
    body: {
        fontSize: theme.fontSizes.desktop.medium,
        fontWeight: theme.fontWeights.normal,
        fontFamily: theme.fonts.regular,
        color: theme.colors.whiteText,
        marginTop: theme.gaps.desktop.small,
    },
    stat: {
        display: 'flex',
        alignItems: 'center',
    },
    notFound: {
        fontSize: theme.fontSizes.desktop.large,
        fontFamily: theme.fonts.bold,
    },
    answersTitle: {
        fontSize: theme.fontSizes.desktop.xlarge,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.whiteText,
        marginBottom: theme.gaps.desktop.small,
    },
    answersCount: {
        fontSize: theme.fontSizes.desktop.medium,
        color: theme.colors.whiteText,
    },
};

const FlagUserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: ${({ theme }) => theme.gaps.desktop.small};
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 8px 15px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.desktop.small};
  font-weight: 800;
  margin-right: ${({ theme }) => theme.gaps.desktop.small};
`;

const BottomSpacerLine = styled.hr`
  border: none;
  border-top: 2px solid #BEE239;
  margin: ${({ theme }) => theme.gaps.desktop.xxsmall} auto;
  height: 2px;
  width: calc(100% - 100px);
`;

const QuestionContainer = styled.div`
  display: flex;
  padding: 0 50px;
  max-width: 100%;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.gaps.desktop.large};
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.gaps.desktop.medium};
`;

const FooterContainer = styled.div`
  margin-top: auto;
`;

const VoteContainer = styled.div`
  margin-right: ${({ theme }) => theme.gaps.desktop.medium};
  height: 100%;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  padding: 0 50px;
  margin-top: ${({ theme }) => theme.gaps.desktop.large};
`;

const ButtonContainer = styled.div`
  padding-left: 50px;
  margin-top: ${({ theme }) => theme.gaps.desktop.small};
  display: flex;
  justify-content: flex-start;
`;

const Spacer = styled.div`
  width: ${({ width }) => width || '100vh'}; 
  height: ${({ height }) => height || '40px'}; 
`;

const AnswerContainer = styled.div`
  padding: 0 50px;
  margin-top: ${({ theme }) => theme.gaps.desktop.medium};
  margin-bottom: ${({ theme }) => theme.gaps.desktop.small};
`;

export default AnswerQuestion;

import React, { useEffect, useState, useCallback, useRef } from 'react';
import AppBar from '../components/Topappbar';
import { Editor, useMonaco } from '@monaco-editor/react';
import FileManager from '../components/FileManager';
import Xterm from '../components/Xterm';

const Multiplayer = ({ username = "Guest" }) => {
    const appBarHeight = 200;
    const paddingBottom = 17;
    const bottomContainerHeight = 1;

    const monaco = useMonaco();
    const [editor, setEditor] = useState(null);
    const [cursorBoxColor, setCursorBoxColor] = useState('#bee239');
    const widgetRef = useRef(null);

    const loadThemeFromLocalStorage = () => {
        const storedTheme = localStorage.getItem('editorTheme');
        return storedTheme || 'cobalt2';
    };

    useEffect(() => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setCursorBoxColor(randomColor);

        if (monaco) {
            monaco.editor.defineTheme('cobalt2', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: '', foreground: 'FFFFFF', background: '#1B2B34' },
                    { token: 'comment', foreground: '#6A8D92', fontStyle: 'italic' },
                    { token: 'keyword', foreground: '#F9A825' },
                    { token: 'variable', foreground: '#E8E8E8' },
                    { token: 'constant', foreground: '#F9A825' },
                    { token: 'number', foreground: '#E8E8E8' },
                    { token: 'string', foreground: '#87D7A5' },
                    { token: 'operator', foreground: '#FFB9B9' },
                    { token: 'function', foreground: '#60D0F5' },
                    { token: 'class', foreground: '#F7D9B6' },
                    { token: 'type', foreground: '#D1F7F7' },
                ],
                colors: {
                    'editor.background': '#1B2B34',
                    'editor.foreground': '#E8E8E8',
                    'editor.lineHighlightBackground': '#2C3C4B',
                    'editor.selectionBackground': '#FFB9B9',
                    'editorCursor.foreground': randomColor,
                },
            });

            const currentTheme = loadThemeFromLocalStorage();
            monaco.editor.setTheme(currentTheme);
        }
    }, [monaco]);

    const handleEditorDidMount = useCallback((editorInstance, monacoInstance) => {
        setEditor(editorInstance);

        const widgetId = "username-widget";

        editorInstance.updateOptions({
            cursorBlinking: 'solid',
        });

        class UsernameWidget {
            constructor() {
                this.domNode = document.createElement('div');
                this.domNode.style.backgroundColor = cursorBoxColor;
                this.domNode.style.color = '#FFFFFF';
                this.domNode.style.padding = '4px 8px';
                this.domNode.style.fontSize = '11px';
                this.domNode.style.borderRadius = '10px 6px 6px 0';
                this.domNode.style.pointerEvents = 'none';
                this.domNode.style.position = 'absolute';
                this.domNode.style.whiteSpace = 'nowrap';
                this.domNode.innerText = username;
            }

            getId() {
                return widgetId;
            }

            getDomNode() {
                return this.domNode;
            }

            getPosition() {
                const position = editorInstance.getPosition();
                const layoutInfo = editorInstance.getLayoutInfo();
                const top = layoutInfo.contentTop + (position.lineNumber - 1) * layoutInfo.lineHeight;
                return {
                    position: {
                        lineNumber: position.lineNumber,
                        column: position.column,
                    },
                    preference: [monacoInstance.editor.ContentWidgetPositionPreference.ABOVE],
                };
            }

            updateColor(newColor) {
                this.domNode.style.backgroundColor = newColor;
            }
        }

        const widget = new UsernameWidget();
        widgetRef.current = widget;
        editorInstance.addContentWidget(widget);

        editorInstance.onDidChangeCursorPosition(() => {
            editorInstance.layoutContentWidget(widget);
        });
    }, [cursorBoxColor, username]);

    useEffect(() => {
        if (widgetRef.current) {
            widgetRef.current.updateColor(cursorBoxColor);
        }
    }, [cursorBoxColor]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                minHeight: '100vh',
                overflow: 'hidden',
            }}
        >
            <AppBar />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    overflow: 'hidden',
                    minHeight: `calc(100vh - ${appBarHeight}px - ${bottomContainerHeight}px - ${paddingBottom}px)`,
                    paddingBottom: `${paddingBottom}px`,
                }}
            >
                <div
                    style={{
                        width: '265px',
                        padding: '8px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto',
                        paddingTop: '16px',
                    }}
                >
                    <FileManager height="100%" />
                </div>

                <div
                    style={{
                        flex: 1,
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            border: `2px solid ${cursorBoxColor}`,
                            borderRadius: '4px',
                            height: '100%',
                            display: 'flex',
                            position: 'relative',
                        }}
                    >
                        <Editor
                            height="100%"
                            defaultLanguage="javascript"
                            defaultValue="// Start typing your code here"
                            theme={loadThemeFromLocalStorage()}
                            onMount={handleEditorDidMount}
                        />
                    </div>
                </div>

                <div
                    style={{
                        marginTop: '16px',
                        width: '500px',
                        height: 'calc(100%)',
                    }}
                >
                    <Xterm />
                </div>
            </div>

            <div
                style={{
                    height: `${bottomContainerHeight}px`,
                    backgroundColor: 'transparent',
                    padding: '20px',
                }}
            ></div>
        </div>
    );
};

export default Multiplayer;

import React from 'react';
import './Welcome.css';
import logo from '../assets/logo.svg'; // Import the logo

const Welcome = () => {
  return (
    <div className="page-container">
      <div className="app-bar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="retro-key">Community</div>
      </div>
      <div className="content-container">
        <div className="text-container">
          <h1 className="title-text">Welcome to Askadev</h1>
          <p className="description-text">
            At <span className="highlight">Askadev</span>, we believe that <span className="highlight">knowledge</span> is a powerful tool for <span className="highlight">transformation</span>. Our mission is to harness this power by providing unparalleled <span className="highlight">solutions</span> and <span className="highlight">support</span> to individuals and communities around the world. Here, we’re not just about answering questions—we’re about igniting a journey of <span className="highlight">discovery</span>, <span className="highlight">innovation</span>, and <span className="highlight">growth</span>.
            <br /><br />
            Imagine a place where every <span className="highlight">challenge</span> is met with enthusiasm, where every question sparks a collaborative effort to uncover the best possible answer. At <span className="highlight">Askadev</span>, we’re creating that space. Our <span className="highlight">diverse</span> community of experts, enthusiasts, and problem-solvers work together to tackle a wide range of topics and issues. From technical problems to everyday dilemmas, our platform is a hub for <span className="highlight">innovative solutions</span>, <span className="highlight">creative ideas</span>, and <span className="highlight">unmatched support</span>.
          </p>
        </div>

        <div className="ascii-art-container">
          <pre className="ascii-art">
{`                                 ....
                                .'' .'''
.                             .'   :
\\                          .:    :
 \\                        _:    :       ..----.._
  \\                    .:::.....:::.. .'         ''.
   \\                 .'  #-. .-######'     #        '.
    \\                 '.##'/ ' ################       :
     \\                  #####################         :
      \\               ..##.-.#### .''''###'.._        :
       \\             :--:########:            '.    .' :
        \\..__...--.. :--:#######.'   '.         '.     :
        :     :  : : '':'-:'':'::        .         '.  .'
        '---'''..: :    ':    '..'''.      '.        :'
           \\  :: : :     '      ''''''.     '.      .:
            \\ ::  : :     '            '.      '      :
             \\::   : :           ....' ..:       '     '.
              \\::  : :    .....####\\ .~~.:.             :
               \\':.:.:.:'#########.===. ~ |.'-.   . '''.. :
                \\    .'  ########## \ \ _.' '. '-.       '''.
                :\\  :     ########   \ \      '.  '-.        :
               :  \\'    '   #### :    \ \      :.    '-.      :
              :  .'\\   :'  :     :     \ \       :      '-.    :
             : .'  .\\  '  :      :     :\ \       :        '.   :
             ::   :  \\'  :.      :     : \ \      :          '. :
             ::. :    \\  : :      :    ;  \ \     :           '.:
              : ':    '\\ :  :     :     :  \:\     :        ..'
                 :    ' \\ :        :     ;  \|      :   .'''
                 '.   '  \\:                         :.''
                  .:..... \\:       :            ..''
                 '._____|'.\\......'''''''.:..'''
                            \\
`}
          </pre>
        </div>
      </div>
      <div className="additional-info">
        <h2>Embracing <span className="highlight">Web5</span> and <span className="highlight">DIDs</span></h2>
        <p>
          At Askadev, we're leading the way in the next generation of web technology with our adoption of <span className="highlight">Web5</span>. <span className="highlight">Web5</span> is a revolutionary approach to decentralized web applications, combining the best of Web3's decentralization with the user-centric features of Web2. This means that at Askadev, you not only get a platform that’s secure and private but also one that’s built with the latest advancements in web technology.
        </p>
        <p>
          Central to our <span className="highlight">Web5</span> strategy is the use of <span className="highlight">Decentralized Identifiers (DIDs)</span>. <span className="highlight">DIDs</span> are a new type of identifier that enables verifiable, self-sovereign digital identities. This approach allows you to control your identity and personal data in a way that's both secure and private. By using <span className="highlight">DIDs</span>, Askadev ensures that your interactions and contributions are validated and protected, fostering a more trustworthy and open community.
        </p>
        <p>
          By integrating <span className="highlight">Web5</span> and <span className="highlight">DIDs</span>, Askadev is not just adapting to technological changes but also setting new standards in digital identity and decentralized interactions. Join us as we explore these cutting-edge technologies and create a more open, secure, and user-centric platform.
        </p>
      </div>
      <div className="info-cards-container">
        <div className="info-card">
          <h2 className="card-title">Questions Asked</h2>
          <p className="card-value">7,214</p>
        </div>
        <div className="info-card">
          <h2 className="card-title">Joined Users</h2>
          <p className="card-value">5,678</p>
        </div>
        <div className="info-card">
          <h2 className="card-title">Questions Solved</h2>
          <p className="card-value">6,560</p>
        </div>
      </div>

    </div>
  );
};

export default Welcome;

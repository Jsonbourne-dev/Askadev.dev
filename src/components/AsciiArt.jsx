import React from 'react';
import styled from 'styled-components';

const AsciiArtContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const AsciiArtWrapper = styled.div`
  /* Optional styling for the wrapper if needed */
`;

const AsciiArt = styled.pre`
  color: #FFFF00;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
  white-space: pre;
  overflow-x: auto;
  max-width: 100%;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.75em;
    line-height: 1.2;
  }

  @media (max-width: 500px) {
    font-size: 0.60em;
    line-height: 1.2;
  }
`;

const AsciiArtComponent = () => (
  <AsciiArtContainer>
    <AsciiArtWrapper>
      <AsciiArt>
        {`                                  ....
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
      </AsciiArt>
    </AsciiArtWrapper>
  </AsciiArtContainer>
);

export default AsciiArtComponent;

import React from 'react';
import Canvas from './Canvas';
import Draw from './Draw';
import HeaderCanvas from './HeaderCanvas';
import * as S from './style'

const Header = () => {

    return (
        <>
            <S.canvasText>
                <HeaderCanvas />
            </S.canvasText>
            
        </>
    )
}

export default Header;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import Html from '../Html';

const FadeText = props => {
    const lines = props.lines || 4;
    const isHtml = props.html;
    const text = props.children;
    const showHeight = Number(lines) * 30;
    // 30 = line height(1.5) * font-size(20)
    // Also change top of .fade-text__hide and its height as ( 30/10 * (lines - noOfLinesFaded)rem )

    let element = {};
    const [hidden, hide] = useState(0);
    const [show, toggle] = useState(false);

    useEffect(() => {
        if (element.clientHeight > showHeight) hide(1);
    }, [element.clientHeight, showHeight]);

    const contracted = (
        <div className={'fade-text list' + (show ? ' fade-text--show' : '')}>
            <AnimateHeight height={show ? 'auto' : showHeight} duration={250}>
                {isHtml ? <Html tag='div'>{text}</Html> : <div>{text}</div>}
                <div className='fade-text__hide' style={{ top: `${3 * (lines - 2)}rem` }}></div>
            </AnimateHeight>
            <a href='#!' onClick={() => toggle(!show)}>
                {show ? (
                    <span className='fade-text__btn'>
                        <i className='fas fa-minus'></i>See less
                    </span>
                ) : (
                    <span className='fade-text__btn'>
                        <i className='fas fa-plus'></i>See more
                    </span>
                )}
            </a>
        </div>
    );

    const normal = isHtml ? (
        <Html tag='div' ref={e => (element = e)} className='list'>
            {text}
        </Html>
    ) : (
        <div ref={e => (element = e)} className='list'>
            {text}
        </div>
    );

    return hidden ? contracted : normal;
};

FadeText.propTypes = {
    lines: PropTypes.string,
    html: PropTypes.bool
};

export default FadeText;

import React from 'react';
import { render } from 'react-dom';
import Intreact from 'intreact';

render(
    <Intreact
        autofocus={true}
        onClick={() => console.log('click')}
        onEscape={ev => console.log('onEscape')}
        onArrowLeft={ev => console.log('onArrowLeft')}
        onArrowRight={ev => console.log('onArrowRight')}
        onMouseOver={() => console.log('mouseOver')}
        onTap={() => console.log('tap')}
        onTapoutside={() => console.log('tapoutside')}
        onSwipeleft={() => console.log('swipeleft')}
        onSwipedown={() => React.unmountComponentAtNode(document.getElementById('intreact-example'))}
        onSwiperight={() => console.log('swiperight')}>

        <div className="touch-area">TOUCH ME! <button>button</button></div>
        <button>button</button>

    </Intreact>,
    document.getElementById('intreact-example')
);

import { Srax, Hook } from '@sraxjs/srax';

const Home = () => {

    let ele = [];
    let [state, setState] = Hook.state({
        value: 0
    });

    let setCount = () => {
        console.time('srax state render');
        setState({
            value: Math.random()
        });
    }

    for (let i = 0; i < 20000; i++) {
        if (i % 2 === 0) {
            ele.push(
                <div data-value={state.value + 1}>
                    <div>{state.value + 1}</div>
                    <div>{state.value + 1}</div>
                    <div>{state.value + 1}</div>
                    <div>{state.value + 1}</div>
                </div>
            );
        } else {
            ele.push(<div>staticrende value</div>);
        }
    }

    return (
        <div>
            <div>
                <button type="button" onClick={setCount}>随机数</button>
            </div>
            {ele}
        </div>
    );

};

export default Home;
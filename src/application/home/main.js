import { Hook } from '@sraxjs/srax';
import S from './main.less';

const TextItem = (props, children) => {
    return (
        <span date-text={props?.text}>
            <i>{children}</i>
        </span>
    );
}

const Hello = (props) => {

    let hello = ['你好', 'Hello', 'こんにちは', '안녕하세요', 'Bonjour', 'Hallo!', 'Здравствый'];

    let [state, setState] = Hook.state({
        value: hello[0]
    });

    setInterval(() => {

        let index = hello.indexOf(state.value) + 1;

        setState({
            value: hello[index >= hello.length ? 0 : index]
        });

    }, 2000);

    return (
        <TextItem>{state.value + ', '}</TextItem>
    );

}

const Home = () => {

    let [state, setState] = Hook.state({
        date: new Date()
    });

    setInterval(() => {
        setState({
            date: new Date()
        });
    }, 1000);

    return (
        <div class={S.home}>
            <Hello text={state.date} /><TextItem>Srax!</TextItem>
            <div class={S.dateTime}>
                <TextItem text={state.date}>{state.date}</TextItem>
            </div>
        </div>
    );

};

export default Home;
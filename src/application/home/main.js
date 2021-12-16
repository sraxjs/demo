import { Hook } from '@sraxjs/srax';
import S from './main.less';

const Hello = () => {

    let [context, renderContext] = Hook.context();
    let hello = ['你好', 'Hello', 'こんにちは', '안녕하세요', 'Bonjour', 'Hallo!', 'Здравствый'];
    let value = hello[0];

    setInterval(() => {

        let index = hello.indexOf(value) + 1;

        value = hello[index >= hello.length ? 0 : index];

        renderContext();

    }, 2000);

    return [value];

}

const Home = () => {

    let [context, renderContext] = Hook.context();
    let [hello] = Hello();
    let date = new Date();

    setInterval(() => {
        date = new Date();
        renderContext();
    }, 1000);

    Hook.effect(() => {
        console.log('dom update');
    }, []);

    Hook.effect(() => {
        console.log('dom ready');
        return () => {
            console.log('destroy');
        }
    });

    Hook.effect((hello) => {
        console.log('hello: ' + hello);
    }, [hello]);

    return (
        <div class={S.home}>
            <div>{hello}, Srax!</div>
            <div class={S.dateTime}>{date}</div>
        </div>
    );

}

export default Home;
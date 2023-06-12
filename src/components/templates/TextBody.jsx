import Card from "../atoms/Card";
import HeadingText from "../atoms/HeadingText";

const TextBody = () => {
    return(
        <section className="container-fluid mx-11 mt-12 font-bold text-lg">
            <HeadingText />
            <Card />
        </section>
    );
}

export default TextBody;
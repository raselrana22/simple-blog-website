export default function Home() {
    const lineBreak = <br />;
    const message = (
        <div>
            Welcome to my Blog...
            {lineBreak}
            Explore a world of insightful articles, captivating stories, and engaging content.
            Whether you are here to learn, be inspired, or simply enjoy some quality reading, we have got something for everyone.
            Feel free to browse through our collection and discover the diverse topics that await you.
            {lineBreak}
            Happy reading!
        </div>
    );
    const space = <p> </p>;

    return (
        <div className='px-8 pt-3 text-lg flex justify-center text-justify'>
            <p>{message}</p>
        </div>
    );
}





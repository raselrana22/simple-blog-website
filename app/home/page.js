export default function Home() {
    const lineBreak = <br />;
    const message = (
        <div>
            Welcome to our blog!
            {lineBreak}
            Explore a world of insightful articles, captivating stories, and engaging content.
            Whether you are here to learn, be inspired, or simply enjoy some quality reading, we have got something for everyone.
            Feel free to browse through our collection and discover the diverse topics that await you.
            {lineBreak}
            Happy reading!
        </div>
    );


    return (
        <div className='px-8 pt-3 text-lg'>
            <p>{message}</p>
        </div>
    );
}





import Button from './Button';
import { FaForward } from 'react-icons/fa6';

const Updates = () => {
    return (
        <section className="px-10">
            <div className="h-[80vh] min-h-96 rounded-lg bg-[url('/img/parallax.webp')] bg-cover bg-fixed bg-center bg-no-repeat px-10">
                <div className="pt-10">
                    <h2 className="font-zentry special-font text-4xl font-black text-white md:text-8xl">
                        Lat<b>e</b>st <br />
                        <b>u</b>pdates
                    </h2>
                    <p className="font-general my-6 max-w-64 text-[10px] text-white">
                        Stay updated with the latest news, events, and updates
                        in our ecosystem. Be part of our universe's growth and
                        evolution.
                    </p>
                    <Button
                        containerClass="!bg-yellow-300 flex-center gap-1"
                        rightIcon={<FaForward />}
                        className="!text-black"
                    >
                        Read all news
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Updates;

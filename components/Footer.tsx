import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="blogs">
        <div className="flex flex-col items-center">
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light text-zinc-50">
                {footer}
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
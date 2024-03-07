import { TypeAnimation } from 'react-type-animation';

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'React Developer',
        1000,
        'Full Stack Web Deleloper',
        1000,
        'Web Designer',
        1000
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TypeEffect;
import Image from 'next/image';
import ImgStyle from './ImgStyle.module.css';

const Img = () => {
  return (
    <div className={`${ImgStyle.imgContainer} ${ImgStyle.back}`}>
      <div className={ImgStyle.backgroundImage}>
        <Image
          src="/background-picture.jpg"
          alt="background Picture"
          layout="fill"
          objectFit="cover"
          className={ImgStyle.lazyLoadedImage}
          sizes="(max-width: 600px) 100vw, 600px" 
        />
      </div>
      <div className={ImgStyle.content}>
      </div>
    </div>
  );
};

export default Img;


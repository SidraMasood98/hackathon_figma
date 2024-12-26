import Image from 'next/image';
import Link from 'next/link';

const ProductDetails: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 flex space-x-6">Description  <div className="ml-8">
        <Link href="/additional-info">
          <Link className="hover:text-blue-500 hover:underline text-[#9F9F9F] " href={''}>Additional Information</Link>
        </Link>
        <Link href="/reviews" className="ml-4">
          <Link className="hover:text-blue-500 hover:underline text-[#9F9F9F]" href={''}>Reviews [5]</Link>
        </Link>
      </div></h2>
      
      <p className="mb-6">
        Embodying the raw, wayward spirit of rock n roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and <br /> sound of Marshall,
        unplugging the chords, and takes the show on the road.
      </p>
      <p className="mb-6 flex flex-col justify-center items-center ">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
        styled engineering. Setting the bar as one of the loudest <br /> speakers in its
        class, the Kilburn is a compact, stout-hearted hero with a well-balanced
        audio which boasts a clear midrange <br /> and extended highs for a sound that is
        both articulate and pronounced. The analogue knobs allow you to fine-tune
        the controls <br /> to your personal preferences while the guitar-influenced
        leather strap enables easy and stylish travel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex justify-center ">
          <Image
            src="/images/d1.svg" 
            alt="Kilburn Speaker"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/d2.svg" 
            alt="Kilburn Speaker"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

     
    </div>
  );
};

export default ProductDetails;
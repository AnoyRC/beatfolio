import WalletBtn from '@/components/ui/WalletBtn';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between px-20 py-4">
        <Image src="/logo-lg.svg" alt="logo" width={131} height={40} />

        <WalletBtn />
      </div>

      <p className="text-center border-t border-white py-3 font-medium text-lg">
        © 2023 Beatfolio, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

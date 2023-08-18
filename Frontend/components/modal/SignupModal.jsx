'use client';

import { Card, Input, Button, Textarea } from '@material-tailwind/react';
import { useRef, useState } from 'react';

export default function SimpleRegistrationForm() {
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);

  const handleModal = () => {
    setIsAnimating(true);

    modalRef.current.classList.add('animate-growAndShrink');
    setTimeout(() => {
      setIsAnimating(false);
      modalRef.current.classList.remove('animate-growAndShrink');
    }, 500);
  };

  return (
    <>
      <div
        className="h-screen w-screen absolute top-0 left-0 z-40 backdrop-blur-lg"
        onClick={handleModal}
      ></div>

      <Card
        color="gray"
        ref={modalRef}
        shadow={true}
        className={`p-5 w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
          isAnimating ? 'animate-growAndShrink' : ''
        }`}
      >
        <h3 className="text-white text-2xl font-bold">Sign Up</h3>
        <p className="mt-1 font-normal text-gray-500">
          Enter your details to register.
        </p>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 text-white">
            <Input
              color="white"
              type="file"
              size="lg"
              label="Profile Photo"
              required
            />
            <Input color="white" size="lg" label="Your Name" required />
            <Input color="white" size="lg" label="Your Signature" required />
            <Textarea
              color="purple"
              success
              label="Write a small Bio"
              className="text-white"
            />
          </div>

          <Button className="mt-6 btn-gradiant" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </>
  );
}

"use client";

import { useRef, useState } from "react";
import { Card, Input, Button, Textarea } from "@material-tailwind/react";

import useCrossmint from "@/hooks/useCrossmint";
import { saveProfileToIPFS } from "@/hooks/saveToIPFS";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/redux/crossmintSlice";
import { useWallet } from "@solana/wallet-adapter-react";
import { closeSignupModal } from "@/redux/modalSlice";
import { useRouter } from "next/navigation";

export default function SimpleRegistrationForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const router = useRouter();
  const { mintUser } = useCrossmint();

  const isOpen = useSelector((state) => state.modalSlice.isSignupOpen);
  const { publicKey, connected } = useWallet();

  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);

  const handleModal = () => {
    setIsAnimating(true);

    modalRef.current.classList.add("animate-growAndShrink");
    setTimeout(() => {
      setIsAnimating(false);
      modalRef.current.classList.remove("animate-growAndShrink");
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!connected) return;
    try {
      const image = await saveProfileToIPFS(e.target[0].files[0]);

      const res = await mintUser({ name, description: bio, image }, publicKey);

      if (res) {
        dispatch(
          setCurrentUser({
            id: publicKey,
            metadata: {
              name,
              description: bio,
              image: `https://${image}.ipfs.w3s.link`,
            },
          })
        );
        dispatch(closeSignupModal());
        router.push("/users/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    isOpen && (
      <>
        <div
          className="h-screen w-screen absolute top-0 left-0 z-[98] backdrop-blur-lg"
          onClick={handleModal}
        ></div>

        <Card
          color="gray"
          ref={modalRef}
          shadow={true}
          className={`p-5 w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] ${
            isAnimating ? "animate-growAndShrink" : ""
          }`}
        >
          <h3 className="text-white text-2xl font-bold">Sign Up</h3>
          <p className="mt-1 font-normal text-gray-500">
            Enter your details to register.
          </p>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6 text-white">
              <Input
                color="white"
                type="file"
                size="lg"
                label="Profile Photo"
                required
              />
              <Input
                color="white"
                size="lg"
                label="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <Textarea
                color="purple"
                success
                label="Write a small Bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                className="text-white"
              />
            </div>

            <Button className="mt-6 btn-gradiant" fullWidth type="submit">
              Register
            </Button>
          </form>
        </Card>
      </>
    )
  );
}

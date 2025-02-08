import Image from "next/image";
import Button from "@/components/Button";
import {Input} from "@/components/ui/input";
import Checkbox from "@/components/MyCheckbox";
import CountrySelector from "@/components/ui/Myselect";

import Link from "next/link";

function Signin() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-[93%] mx-auto">
        <div className="h-auto w-[380px] mx-auto my-10 p-4 sm:p-6 bg-white rounded-lg">
          <div className="w-full mx-auto text-center">
            <div className="flex justify-center">
              <Image
                className="mb-4"
                src="/images/logo2.png"
                alt={"logo"}
                width={40}
                height={20}
              />
            </div>
            <h1 className="text-2xl font-semibold mb-4">
              BECOME A NIKE MEMBER
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Create your Nike Member profile and get first access to the very
              best of Nike products, inspiration, and community.
            </p>
            <Input
              type="email"
              placeholder="Enter Email"
              className="w-full mb-4"
            />
            <Input
              type="password"
              placeholder="Enter Password"
              className="w-full mb-4"
            />
            <Input
              type="text"
              placeholder="First Name"
              className="w-full mb-4"
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="w-full mb-4"
            />
            <Input
              type="text"
              placeholder="Date Of Birth"
              className="w-full mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          
            <CountrySelector/>
            <Checkbox
              label="Sign up for emails to get updates from Nike on products, offers, and your Member benefits"
              id="one"
              className="my-4"
            />
            <Button text="Join Us" className="rounded-md w-full " />
            <p className="text-sm text-gray-500 mt-4 text-center sm:text-left">
              Already a Member?{" "}
              <Link href="/Login" className="underline text-black">
              Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signin;

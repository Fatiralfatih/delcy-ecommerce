import { Button, Card, CardContent, Input } from "@/components/ui";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [result, setResult] = useState("");

  const year = new Date().getFullYear();

  return (
    <footer className=" pt-5 ">
      <Card className=" container px-4 py-6">
        <CardContent>
          <div className="flex flex-col gap-4">
            <article className="flex flex-col space-y-2 md:text-center">
              <h1 className="text-2xl font-black md:text-3xl">Delcy</h1>
              <p className="text-sm">
                We Growing up your bussiness with personal manager
              </p>
              <p className="text-sm text-green-500">Delcy, {year}</p>
            </article>

            <hr className="bg-zinc-900/60" />

            <div className="flex gap-8 flex-col sm:flex-row sm:justify-between items-center">
              <div className="sm:mt-8">
                <p className="text-sm">
                  &copy; {year} Delcy Inc. All rights reserved
                </p>
              </div>

              <div className=" hidden lg:flex lg:flex-col lg:w-fit lg:gap-4">
                <div className="flex gap-3 items-center">
                  <Input
                    className="w-24 h-8"
                    type="input-1"
                    name="increase"
                    placeholder="..."
                  />
                  <span className="text-xl ">+</span>
                  <Input
                    className="w-24 h-8"
                    type="number"
                    name="input-2"
                    placeholder="..."
                  />
                  <Button
                    variant="outline"
                    className="w-10 h-8 py-0 text-lg"
                    name="result-0"
                    onClick={() => setResult("Hello World!")}
                  >
                    =
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Result : {result}</p>
                  <Button
                    variant="outline"
                    name="reset-0"
                    className="w-fit hover:bg-success-500"
                    onClick={() => setResult("")}
                  >
                    reset
                  </Button>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/fatiralfatihh/"
                  target="_blank"
                  aria-label="Read more about profil instagram fatir"
                >
                  <Button
                    variant="instagram"
                    size="icon"
                    name="instagram"
                    className="text-2xl"
                  >
                    <FaInstagram />
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/fatir.alfatih.144"
                  target="_blank"
                  aria-label="Read more about profil facebook fatir"
                >
                  <Button
                    variant="facebook"
                    size="icon"
                    name="facebook"
                    className="text-2xl text-white"
                  >
                    <FaFacebook />
                  </Button>
                </a>
                <a
                  href="https://github.com/Fatiralfatih"
                  target="_blank"
                  name="github"
                  aria-label="Read more about profil github fatir"
                >
                  <Button
                    size="icon"
                    className="text-2xl hover:bg-zinc-950/80 hover:text-white"
                  >
                    <FaGithub />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export { Footer };

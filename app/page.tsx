import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center text-slate-100 bg-slate-900">
        <div className="w-full max-w-[1440px] flex flex-col gap-8 p-4 ">
          <div className="flex flex-col gap-4 w-full items-center">
            <p className="text-3xl">Software Engineer</p>

            <Image
              src={
                "https://uploader.irys.xyz/9ydksMxVyFdbVH4vfyzoWsL3FGCcfhqKjH74TtUvnU2X/1853.png"
              }
              className="rounded-2xl"
              width={280}
              height={280}
              alt="Image"
            ></Image>

            <p className="text-sm text-center">
              Software Engineer specializing in <br />
              Blockchain and Web Development
            </p>

            <div className="flex items-center gap-2">
              <Github />
              <Facebook />
              <Linkedin />
            </div>
          </div>
          {/*  */}

          {/* <div className="flex flex-col md:flex-row gap-4 w-full items-center bg-slate-800 text-slate-50 p-8 rounded-2xl">
            <div className="flex flex-col gap-2">
              <p className="text-2xl text-center">Hi, I’m Renzo</p>

              <p className="text-sm text-center max-w-[500px] p-4 rounded-xl bg-slate-900 ">
                a passionate software engineer specializing in blockchain, Web3,
                and full-stack development. My expertise lies in building
                efficient, scalable applications and exploring cutting-edge
                technologies to create impactful solutions.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl text-center">Mission</p>

              <p className="text-sm text-center max-w-[500px]">
                To bridge the gap between complex blockchain technology and
                user-friendly applications while contributing to the
                decentralized future.
              </p>
            </div>
          </div> */}

          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex justify-center md:justify-start items-center w-full ">
              <p className="text-2xl">Skills and Tech</p>
            </div>

            <div className="flex flex-col gap-2 w-full md:flex-row">
              <div className="flex flex-col gap-2 w-full p-4 bg-slate-800 rounded-2xl text-slate-50">
                <p className="text-xl">Programming Languages</p>

                <div className="flex flex-wrap gap-2">
                  <p className="text-xs">TypeScript</p>
                  <p className="text-xs">JavaScript</p>
                  <p className="text-xs">Solidity</p>
                  <p className="text-xs">Python</p>
                  <p className="text-xs">Rust</p>
                  <p className="text-xs">Go</p>
                  <p className="text-xs">Move</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full p-4 bg-slate-800 rounded-2xl text-slate-50">
                <p className="text-xl">Frameworks & Libraries</p>

                <div className="flex flex-wrap gap-2">
                  <p className="text-xs">React JS</p>
                  <p className="text-xs">Node.js</p>
                  <p className="text-xs">Web3 JS</p>
                  <p className="text-xs">Ethers JS</p>
                  <p className="text-xs">Anchor Solana</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full p-4 bg-slate-800 rounded-2xl text-slate-50">
                <p className="text-xl">Blockchain & Web3 Tools</p>

                <div className="flex flex-wrap gap-2">
                  <p className="text-xs">Solidity</p>
                  <p className="text-xs">Hardhat</p>
                  <p className="text-xs">Foundry</p>
                  <p className="text-xs">The Graph</p>
                  <p className="text-xs">Umi Metaplex</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full p-4 bg-slate-800 rounded-2xl text-slate-50">
                <p className="text-xl">Database Technologies</p>

                <div className="flex flex-wrap gap-2">
                  <p className="text-xs">MongoDB</p>
                  <p className="text-xs">PostgreSQL</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full p-4 bg-slate-800 rounded-2xl text-slate-50">
                <p className="text-xl">DevOps & Tools</p>

                <div className="flex flex-wrap gap-2">
                  <p className="text-xs">Docker</p>
                  <p className="text-xs">tmux</p>
                  <p className="text-xs">Git</p>
                  <p className="text-xs">Linux</p>
                  <p className="text-xs">Neovim</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-4 w-full items-center">
            <p className="text-2xl">Proof of Work</p>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">CandyBlinks</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">ArmdaDao</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">PesoApp</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">PromdiFarm</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">BCC Website</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">Muni App</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">Crypto Dragon's Den</p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 bg-slate-800 text-slate-50 p-4 rounded-2xl">
              <div className="bg-slate-200 w-full min-h-[280px] rounded-xl"></div>
              <p className="text-2xl">The Code</p>
            </div>
          </div> */}

          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex justify-center md:justify-start items-center w-full ">
              <p className="text-2xl">Experience</p>
            </div>
            <div className="w-full min-w-[320px] flex flex-col gap-2 p-4 bg-slate-800 rounded-2xl text-slate-50">
              <p className="text-2xl">Freelancer</p>
              <p className="text-sm">2022 - Present</p>
              <p className="text-xs">
                Engineered full-stack applications with React.js, Next.js, and
                Node.js.
              </p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 p-4 bg-slate-800 rounded-2xl text-slate-50">
              <p className="text-2xl">Freelancer</p>
              <p className="text-sm">2022 - Present</p>
              <p className="text-xs">
                Engineered full-stack applications with React.js, Next.js, and
                Node.js.
              </p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 p-4 bg-slate-800 rounded-2xl text-slate-50">
              <p className="text-2xl">Freelancer</p>
              <p className="text-sm">2022 - Present</p>
              <p className="text-xs">
                Engineered full-stack applications with React.js, Next.js, and
                Node.js.
              </p>
            </div>

            <div className="w-full min-w-[320px] flex flex-col gap-2 p-4 bg-slate-800 rounded-2xl text-slate-50">
              <p className="text-2xl">Freelancer</p>
              <p className="text-sm">2022 - Present</p>
              <p className="text-xs">
                Engineered full-stack applications with React.js, Next.js, and
                Node.js.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-slate-800 text-slate-100">
        <div className="flex flex-col gap-4 w-full items-center border border-slate-800  p-4">
          <p className="text-2xl">Portfolio</p>
          <p className="text-sm">@2025</p>

          <div className="flex items-center gap-2">
            <Github />
            <Facebook />
            <Linkedin />
          </div>
        </div>
      </div>
    </>
  );
}

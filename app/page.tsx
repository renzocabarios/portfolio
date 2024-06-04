import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="w-[320px]  min-h-screen flex flex-col gap-10">
        {/* <div className="w-full bg-secondary">p</div> */}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-gray-500">Software Developer</p>
            <p className="text-2xl font-semibold">Renzo Cabarios</p>
          </div>

          <div className="w-full rounded-3xl">
            <AspectRatio ratio={16 / 9} className="rounded-xl ">
              <Image
                src="/images/pfp.jpg"
                alt="Image"
                fill
                className="object-cover rounded-xl"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <p className="text-xl font-semibold">Skills</p>
          <Tabs defaultValue="fe" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="fe">FE</TabsTrigger>
              <TabsTrigger value="be">Back End</TabsTrigger>
              <TabsTrigger value="db">Devops</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            </TabsList>
            <TabsContent value="fe" className="w-full flex flex-wrap gap-2">
              <div className="w-fit px-3 py-1 flex items-center justify-between bg-primary rounded-xl">
                <p>Vue</p>
              </div>{" "}
              <div className="w-fit px-3 py-1 flex items-center justify-between bg-primary rounded-xl">
                <p>Angular</p>
              </div>{" "}
              <div className="w-fit px-3 py-1 flex items-center justify-between bg-primary rounded-xl">
                <p>React</p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

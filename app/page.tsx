import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Portfolio
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Ich bin Dinh Trinh Gia Bao und bin ein Student an der Technischen Universität München.
        </p>
        <p>
          Das Template das hier verwendet wird habe ich nicht selbst geschrieben, sondern von {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio"
          >
            1msirius
          </a>
          .
        </p>
        <p>
          
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            nicht auf diesen Link drücken
          </a>
        </p>
        
        <p>
          Ich weiß nicht was ich hier schreiben soll also ist die Seite größtenteils Leer.
        </p>
      </div>
    </section>
  );
}

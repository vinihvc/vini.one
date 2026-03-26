import { BlurImage } from "@/components/ui/blur-image";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { NavLink } from "@/components/ui/nav-link";
import { COMPANIES } from "@/content/static/companies";
import { CompaniesSection } from "./_components/companies";
import { SocialLinks } from "./_components/social-links";

const HomePage = () => {
  const data = COMPANIES;

  const firstJob = data.at(-1);

  if (!firstJob) {
    throw new Error("First job not found");
  }

  const startYear = new Date(firstJob.startDate).getFullYear();

  return (
    <section className="container">
      <FadeSection className="mt-2 space-y-1">
        <Heading className="from-orange-500 to-yellow-500">Greetings</Heading>

        <h2 className="text-lg text-muted-foreground">
          Sharing my projects, trips and articles.
        </h2>
      </FadeSection>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <FadeSection className="relative" delay={0.1}>
          <BlurImage
            alt="Photo of Vinicius Vicentini, looking up and behind him is the Rijksmuseum, in Amsterdam"
            className="w-full shrink-0 rounded-xl sm:h-80 sm:w-80"
            height={320}
            src="/images/me.webp"
            width={320}
          />

          <SocialLinks className="absolute right-2 bottom-2" />
        </FadeSection>

        <div className="space-y-6 text-justify text-muted-foreground leading-relaxed">
          <FadeSection delay={0.2}>
            <p>
              <span className="font-medium text-foreground">Hi, I'm Vini</span>,
              my first foray into programming came from editing Mods for
              Counter-Strike 1.6. Then I had some websites and blogs and
              eventually decided to turn it into a career.
            </p>
          </FadeSection>

          <FadeSection delay={0.3}>
            <p>
              I enjoy working where design meets code.{" "}
              <span className="font-medium text-foreground">
                CSS, Design Systems, and Animations
              </span>{" "}
              - these are my passion points. Crafting exceptional component APIs
              that users love to use.
            </p>
          </FadeSection>

          <FadeSection delay={0.4}>
            <p>
              In my free time, I enjoy{" "}
              <NavLink
                className="rounded-xs text-foreground underline"
                href="/bookshelf"
              >
                reading books
              </NavLink>
              , cooking, traveling and{" "}
              <span className="font-medium text-foreground">
                spending time with my dogs
              </span>
              .
            </p>
          </FadeSection>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between">
          <FadeSection delay={0.4}>
            <h2 className="font-semibold text-2xl">Career</h2>

            <h3 className="text-muted-foreground">
              {new Date().getFullYear() - startYear}+ years of experience in the
              industry
            </h3>
          </FadeSection>
        </div>

        <FadeSection delay={0.4}>
          <CompaniesSection className="mt-4" data={data} />
        </FadeSection>
      </div>
    </section>
  );
};

export default HomePage;

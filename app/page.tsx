"use client";
import Link from "next/link";
//import { PageInfo, Project, Skill, Social } from "../../typings";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

type Props ={
  // pageInfo: PageInfo[];
  // skills: Skill[];
  // projects: Project[];
  // socials: Social[];
}

export default function Home( ) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden   overflow-y-scroll z-0
      scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
       <Header 
      //  socials={socials}
       />

       <section id="hero" className="snap-start">
       <Hero/>
       </section>
       <section id="about" className="snap-center">
       <About/>
       </section>
       <section id="skills" className="snap-start">
        <Skills/>
       </section>
       <section id="projects" className="snap-start">
        <Projects/>
       </section>
       <section id="contact" className="snap-start">
        <ContactMe/>
       </section>

       <Link href='#hero'>
       <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img 
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
          src="/up.jpg" alt="" />
        </div>
       </footer>
       </Link>
    </div>
  );
}


// export const getStaticProps: GetStaticProps<Props> = async() =>{
    
//   const pageInfo: PageInfo[] = await fetchPageInfo();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[]=await fetchProjects();
//   const socials: Social[] = await fetchSocial();
  
  // return{
  //   props:{
  //     pageInfo,
  //     skills,
  //     projects,
  //     socials,
  //   },

  //   revalidate: 10,
  // }

// }

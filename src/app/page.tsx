import { Contact } from '../section/Contact'
import { Header } from '../section/Header'
import { Hero } from '../section/Hero'
import { Organization } from '../section/Organization';
import { Project } from '../section/Project';
import { Skill } from '../section/Skill';
import { Social } from '../section/Social';
import { Testimonial } from '../section/Testimonial';

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Header />
      <Hero />
      <Organization />
      <Project/>
      <Skill/>  
      <Social/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

import { FaGithub, FaLinkedin, FaDumbbell, FaLink } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer class="footer bg-base-200/60 px-6 py-4">
      <div class="flex w-full flex-wrap items-center justify-between">
        <div class="flex items-center gap-2 text-xl font-bold">
          <FaDumbbell size={20} />
          <span>GymFit</span>
        </div>
        <aside className="grid-flow-col items-center">
          <p>
            {" "}
            ©2024{" "}
            <a className="link link-hover font-medium" href="#">
              Gym Fit
            </a>{" "}
          </p>
        </aside>
        <div className="flex h-5 gap-4">
          <a href="https://github.com/davidmanueldev/gym-fit" target='_blank' className="link" aria-label="Github Link">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/davidmanuel01/" target='_blank' className="link" aria-label="Facebook Link">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
